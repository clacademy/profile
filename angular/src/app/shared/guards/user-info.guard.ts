import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { BaseService } from '..';
import { SpinnerService } from '../../core';
import { debug } from 'util';


@Injectable({
    providedIn: 'root',
})
export class UserInfoGuard implements CanActivate, CanActivateChild {
    constructor(private baseService: BaseService, private router: Router, private spinnerService: SpinnerService) { }
    // Used for  Component/Module
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {

        return this.isUserInfo();
    }
    // Used for Children Component/Module
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate();
    }

    private isUserInfo(): boolean {
        this.spinnerService.show();
        return this.baseService.getCurrentUserValue().then(user => {
            this.spinnerService.hide();
            if (user) {
                return true;
            } else if (user === false) {
                return false;
            }
            return false;

        });

    }

}
