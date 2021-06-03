import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { environment } from '../../../environments/environment';
import * as Oidc from 'oidc-client';

export { User };

@Injectable({
  providedIn: 'root'
})
export class AppAuthNService {

  // tslint:disable-next-line:variable-name
  _userManager: UserManager;

  constructor() {
    const settings = {
      authority: environment.stsBaseUrl,
      client_id: 'asurion-angular',
      redirect_uri: `${environment.clientBaseUrl}assets/signin-callback.html`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.clientBaseUrl}assets/silent-callback.html`,
      post_logout_redirect_uri: `${environment.clientBaseUrl}`,
      response_type: 'code', // Using CODE with PKCE
      scope: 'openid profile email asurion.rvs.api asurion.rvs-profile',
      filterProtocolClaims: true,
      loadUserInfo: true,
      userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    };
    this._userManager = new UserManager(settings);
  }

  public getUser(): Promise<User> {
    return this._userManager.getUser();
  }

  public login(): Promise<void> {
    return this._userManager.signinRedirect({ state: window.location.href });
  }

  public renewToken(): Promise<User> {
    return this._userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this._userManager.signoutRedirect();
  }
}

