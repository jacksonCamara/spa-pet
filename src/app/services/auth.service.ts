import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable()
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() {
      this.manager.getUser().then(user => {
      this.user = user;
      
      });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): User {
    return this.user;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }
  
  finishAuthentication(): Promise<void> {
    console.log("logout")
    return this.manager.signoutRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
}



export function getClientSettings(): UserManagerSettings {
  return {
    
    authority: 'http://localhost:5000',
    client_id: 'angular_spa',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile  api1 roles",
    //scope: "openid profile  api1 custom.profile",
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-refresh.html',
  };
}
