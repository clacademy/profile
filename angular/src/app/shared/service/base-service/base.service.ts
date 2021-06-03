import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'oidc-client';
import { AppAuthNService } from '../app-auth.service';

import { UserPermission } from '../../model/user-permission';


@Injectable()
export class BaseService {

    useInfo: User;
    userPermission: UserPermission;
    private userDetailChange = new Subject<any>();
    updatedUserData$ = this.userDetailChange.asObservable();

    constructor(private auth: AppAuthNService, private router: Router) { }

    public getCurrentUserValue(): any {
        return this.auth.getUser().then(user => {
            if (user && user.access_token && !user.expired) {
                this.setUserPermission(user);
                return this.useInfo = user;
            } else if (user && !user.expired) {
                return this.auth.renewToken().then(userInfo => {
                    this.setUserPermission(userInfo);
                    this.getUpdatedUserDetail(userInfo);
                    return this.useInfo = userInfo;
                });

            } else { this.onLogin(); }
        }).catch(() => {
            return false;
        });
    }

    public onLogin() {
        return this.auth.login().catch(() => {
            return false;

        });
    }

    /**
     * If Token Refresh Updated userInfo Populated
     */
    getUpdatedUserDetail(userInfo?: any) {
        if (userInfo) {
            this.userDetailChange.next(userInfo);
        }

    }
    // Currently we are  using for user-setting page
    updatedToken(): any {
        return this.auth.renewToken().then(userInfo => {
            this.setUserPermission(userInfo);
            this.getUpdatedUserDetail(userInfo);
        }).catch(() => {
            //  this.userDetailChange.next('error');
            return false;
        });
    }
    public onLogout() {
        this.auth.logout().catch(err => { });
    }
    setUserPermission(user?: any) {
        this.userPermission = new UserPermission(user);

    }
    getUserPermission(user?: any) {
        return this.userPermission;

    }

}
