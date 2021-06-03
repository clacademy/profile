import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServiceBase, PagingResult } from '../../shared/model/common-models';
import { SpinnerService, CONFIG } from '../../core';
import { UserFilter } from './model/user-filter';
import { ApplicationUser } from './model/application-user';
import { UserSettingInfo } from '../../shared/model/user-profile-Info';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase {

  constructor(http: HttpClient, private spinnerService: SpinnerService) {
    super(http);
  }

  getAllUsers(userFilter: UserFilter): Observable<PagingResult<ApplicationUser[]>> {
    this.spinnerService.show();
    return this.http.post<PagingResult<ApplicationUser[]>>(this.toApiUrl(CONFIG.userApiUrls.getAllUsers), userFilter)
      .pipe(finalize(() => this.spinnerService.hide()));
  }

  updateUserInfo(user: ApplicationUser) {
    this.spinnerService.show();
    return this.http.put<number>(this.toApiUrl(CONFIG.userApiUrls.createUpdateUser), user)
      .pipe(finalize(() => this.spinnerService.hide()));
  }

  createUserInfo(user: ApplicationUser) {
    this.spinnerService.show();
    return this.http.post<number>(this.toApiUrl(CONFIG.userApiUrls.createUpdateUser), user)
      .pipe(finalize(() => this.spinnerService.hide()));
  }

  getUserById(userId: number) {
    this.spinnerService.show();
    return this.http.get<ApplicationUser>(this.toApiUrl(CONFIG.userApiUrls.createUpdateUser + `/${userId}`))
      .pipe(finalize(() => this.spinnerService.hide()));
  }

  updateUserStatus(userId: number, isEnabled: boolean) {
    this.spinnerService.show();
    return this.http.get<number>(this.toApiUrl(CONFIG.userApiUrls.statusUpdate + `?userId=${userId}&isEnabled=${isEnabled}`))
      .pipe(finalize(() => this.spinnerService.hide()));
  }
  saveTimeFormat(userSettingInfo: UserSettingInfo): Observable<number> {
    this.spinnerService.show();
    return this.http.post<number>(this.toApiUrl(CONFIG.userApiUrls.saveTimeFormat), userSettingInfo)
      .pipe(finalize(() => this.spinnerService.hide()));

  }
}
