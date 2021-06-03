import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFilter } from '../../model/user-filter';
import { ApplicationUser, UserHeader, ApplicationUserRoles } from '../../model/application-user';
import {
  GridHeader,
  PagingResult
} from '../../../../shared';
import { Constants, Table, EmitService, UtilityService, LazyLoadEvent, ToasterService, ShareDataService } from '../../../../core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  @ViewChild('pt') pt: Table; // For accessing primeNg Grid properties
  userFilter: UserFilter;
  gridData: ApplicationUser[];
  setHeader: GridHeader[]; // user for set  client Grid Header
  rowFilterOption: number[] = []; // Grid filter option

  totalRowCount: number; // no of records in Client table
  defaultRow: number;   // default record to showing in grid
  isloading = true;
  userFilterForm: FormGroup;
  filteredObj: any;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private utilityService: UtilityService,
    private emitService: EmitService,
    private toasterService: ToasterService, // service for displaying toaster messages
    private sharedDataService: ShareDataService
  ) {
    this.userFilter = new UserFilter();
    this.userFilterForm = this.formBuilder.group({
      searchCtrl: ['']
    });
  }

  ngOnInit() {
    this.setBreadCrumb();
    this.initUserTable();
  }

  initUserTable() {
    this.setColumn();      // set grid column
    this.setDataFromSharedDataService();
    this.rowFilterSetting(); // grid filter option
  }

  private setDataFromSharedDataService() {
    this.filteredObj = this.sharedDataService.getValue();
    // if filter object from shared data service is not null then assign those values and bind grid.
    if (this.filteredObj && this.filteredObj.key === 'userfilter') {
      this.sharedDataService.setValue(null);
      this.userFilter = this.filteredObj.value;
      this.setFilterValuesToInputControl();
      // disabling lazy loading because it causes inifinite loop issue while setting sorting direction.
      // while setting sort direction it will hit loadClientLazy method it sets pageindex to 0.
      this.isloading = false;
      this.getGridData(); // binding grid data.
    } else {
      this.isloading = true; // enabling lazyload
    }
  }

  /**
   * Method to set filtered values to the input field
   */
  private setFilterValuesToInputControl() {
    this.f.searchCtrl.setValue(this.userFilter.searchText);
  }

  /**
   * Set Headers to User Grid
   */
  setColumn() {
    this.setHeader = UserHeader;
  }

  /**
   * Setting row filter option to grid
   */
  rowFilterSetting() {
    this.rowFilterOption = [10, 20, 30];
    this.defaultRowShow(this.rowFilterOption[0]);
  }

  /**
   *  setting for showing default value to grid
   */
  defaultRowShow(value: number) {
    this.defaultRow = value;
  }

  get f() { return this.userFilterForm.controls; }

  /**
   * For Server side pagination,sorting and filtering use loadClientLazy(event: LazyLoadEvent)
   * this method will automatic call when p-table will initilaize
   *
   */
  loadUserLazy(event: LazyLoadEvent) {
    this.userFilter.pageSize = event.rows;
    this.userFilter.sortName = event.sortField;
    this.userFilter.pageIndex = (event.first / event.rows);
    if (event.sortField && event.sortOrder === 1) {
      this.userFilter.sortDirection = Constants.common.sortOrderAsc;
    }
    if (event.sortField && event.sortOrder === -1) {
      this.userFilter.sortDirection = Constants.common.sortOrderDesc;
    }
    this.getGridData();
  }

  /**
   *  getGridData() used for get all records base on filter
   */
  getGridData() {
    this.userService.getAllUsers(this.userFilter).subscribe((res: PagingResult<ApplicationUser[]>) => {
      this.gridData = [];
      this.gridData = res.pagingResult; // Binding responce to grid
      this.totalRowCount = res.totalRowCount;  // setting total no of records.
      // if Shared date service has filtered data then we need to set current page index, sorting and sorting direction
      if (this.filteredObj) {
        this.pt.rows = this.userFilter.pageSize; // setting page size for the table.
        // if sorting is applied then apply back to table.
        if (this.userFilter.sortDirection && this.userFilter.sortName) {
          this.pt.sortField = this.userFilter.sortName;
          this.pt.sortOrder = this.userFilter.sortDirection === 'asc' ? 1 : -1;
        }
        // this.pt.first = (this.clientFilter.pageIndex * this.clientFilter.pageSize); // setting table page index.
        this.isloading = true; // enabling lazy load
        this.filteredObj = null; // clearing object which is assigned from shared data service.
      }

      this.pt.first = (this.userFilter.pageIndex * this.userFilter.pageSize); // setting table page index.
    });

  }


  /**
   * Setting breadCrumb Urls
   */
  setBreadCrumb() {
    this.emitService.breadCrumbChangeEvent(this.utilityService.getBreadCrumbPath('user'));
  }
  private resetGridAfterSearch() {
    this.userFilter.pageIndex = 0;
    this.pt.first = 0;
  }
  /**
   * Searching Event
   */
  onSubmit() {
    Object.keys(this.f).forEach((key) => this.userFilterForm.get(key).setValue(this.userFilterForm.get(key).value.trim()));
    if (this.userFilterForm.invalid || !this.userFilterForm.dirty ||
      !(this.f.searchCtrl.value)) {
      return;
    }
    this.resetGridAfterSearch();
    this.setFilterData();
    this.getGridData();
  }

  /**
   *  Setting filter value to object
   */
  setFilterData() {
    this.userFilter.searchText = this.f.searchCtrl.value ? this.f.searchCtrl.value : '';
    this.userFilter.pageIndex = 0;
  }

  /**
   * Reseting filter object and grid paging properties
   */
  reset() {
    this.userFilter = new UserFilter();
    this.rowFilterSetting();
    this.isloading = true;

    this.pt.rows = 10;
    this.pt.first = 0;
    this.pt.sortOrder = 0;
    this.pt.sortField = '';
    this.pt.reset();

    this.userFilterForm.reset({
      searchCtrl: ''
    });
  }

  /**
   * Update Enable Status for the user.
   */
  updateUserStatus(status: string, data: ApplicationUser) {
    let message = '';
    if (status === 'disable') {
      data.isEnabled = false;
      message = 'Succesfully user is disabled.';
    } else {
      data.isEnabled = true;
      message = 'Succesfully user is enabled.';
    }
    this.toasterService.clear();
    this.userService.updateUserStatus(data.applicationUserId, data.isEnabled).subscribe((res: number) => {
      if (res) {
        this.toasterService.showSuccess(message);
      }
    });
  }

  getuserRoles(data: ApplicationUserRoles[]) {
    const assignedRole = [];
    data.forEach(element => {
      assignedRole.push(element.name);
    });
    return assignedRole.join(', ');
  }

  editUser(userId: number) {
    // Setting filter object to shared data service because while coming back to client edit page we need to set back same filters.
    // Setting with key value pair, since we shouldn't take other page filters
    const data = { key: 'userfilter', value: this.userFilter };
    this.sharedDataService.setValue(data);
    this.router.navigate(['/user/edit', userId]);
  }
}
