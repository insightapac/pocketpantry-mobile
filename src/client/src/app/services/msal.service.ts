import { Injectable } from "@angular/core";
import * as Msal from "msal";

@Injectable({
  providedIn: "root"
})
export class MsalService {
  msalSettings = {
    instance: "<tenant-name>.b2clogin.com",
    tenant: "<tenant-name>.onmicrosoft.com",
    clientId: "<client-id>",
    signUpSignInPolicy: "<signup-signin-policy-name>",
    b2cScopes: ["openid"]
  };

  /*
   * B2C SignIn SignUp Policy Configuration
   */
  clientApplication = new Msal.UserAgentApplication({
    auth: {
      clientId: this.msalSettings.clientId,
      // In Azure B2C, authority is of the form https://<instance>/tfp/<tenant>/<policyName>/
      authority:
        "https://" +
        this.msalSettings.instance +
        "/tfp/" +
        this.msalSettings.tenant +
        "/" +
        this.msalSettings.signUpSignInPolicy +
        "/",
      validateAuthority: false
    }
  });

  login(): void {
    var _this = this;
    this.clientApplication
      .loginPopup({ scopes: this.msalSettings.b2cScopes })
      .then(
        function(idToken: any) {
          // TODO: Save this as a session token so that we can do smarter things
        },
        function(error: any) {
          window.alert("Error during login:\n" + error);
        }
      );
  }

  logout(): void {
    this.clientApplication.logout();
  }

  isOnline(): boolean {
    return this.getUser() != null;
  }

  getUser() {
    return this.clientApplication.getAccount();
  }
}
