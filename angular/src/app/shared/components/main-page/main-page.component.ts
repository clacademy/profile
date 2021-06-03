import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppAuthNService, User } from '../../service/app-auth.service';
import { BaseService } from '../../service/base-service/base.service';
import { EmitService } from '../../../core';
import { MenuItem } from '../../../core/prime-modules/prime';
import { UserPermission } from '../../';
import { navItem, NavData } from './nav';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit, OnDestroy {

  currentUser: User; // logged in user info
  currentyear = new Date().getFullYear(); // displaying year in footer
  subscription: any;
  breadCrumbData: MenuItem[]; // to hold breadcrumb urls.
  userpermission: UserPermission;
  isSysAdmin = false;
  menuState = 'in';
  isSideMenuShow = false;
  state = 'default';
  isActiveClass = true;

  public navItems = navItem;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  constructor(

    public authn: AppAuthNService,
    private baseService: BaseService,
    private emitService: EmitService,
    // tslint:disable-next-line:variable-name
    @Inject(DOCUMENT) _document?: any,
  ) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

  }

  ngOnInit() {
    this.userDeatil();
    // Subscribed Bredcumb data ( any value changes in children component its get fired automatically and rebind breadCrumb data)
    // The setTimeout is meant to delay the cycle of update for the breadcrumb.
    //  the crumbs are directly displayed in the parent. Because of the change cycle ran by Angular,
    // the parent data are evaluated first, at that point, the breadcrumb was empty.
    // Then once the child component is evaluated, it pushes data to update the breadcrumb which has already been evaluated.
    this.subscription = this.emitService.breadCrumbData$.subscribe((res: any) => {
      setTimeout(() => { this.breadCrumbData = res; }, 0);
    });
  }

  public onLogout() {

    this.authn.logout().catch(err => { });

  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  private userDeatil() {
    this.baseService.getCurrentUserValue().then(user => {
      this.currentUser = user;
      this.userpermission = new UserPermission(user);
      this.isSysAdmin = this.userpermission.isSysAdminUser;

      // tslint:disable-next-line:max-line-length
      // Filter out navigation items if the navigation item doesn't allow the user. Note: null in allowedUserRoles means the link is viewable to all users
      this.navItems = this.filterOutLinks(this.navItems);
    });
    this.baseService.updatedUserData$.subscribe((user: any) => {
      if (user === 'error') { this.baseService.onLogin(); }
      this.currentUser = user;
      this.userpermission = new UserPermission(user);
      this.isSysAdmin = this.userpermission.isSysAdminUser;
    });
  }

  private filterOutLinks(navList: NavData[]) {
    // filter(true) returns the links we want to show
    navList = navList.filter(x =>
      (typeof x.allowedUserRoles === 'undefined') // Allow any link with an empty allowedUserRoles
      // tslint:disable-next-line:max-line-length
      || (x.allowedUserRoles.some(r => this.userpermission.userProfileInfo.roleId.includes(r.toString()))) // Make sure that one of the allowedUserRoles overlaps with at least one of the User's roles
    );

    // Now for each child, filter out the links
    navList.forEach(element => {
      if (element.children !== null && typeof element.children !== 'undefined') {
        element.children = this.filterOutLinks(element.children); // recursively filter out children.
      }
    });

    return navList;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.changes.disconnect();
  }
  menuShow() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

  }
  menuToggle() {
    this.isActiveClass = !this.isActiveClass;
  }
}
