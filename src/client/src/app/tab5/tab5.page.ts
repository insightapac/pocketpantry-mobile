import { Component } from "@angular/core";
import { MsalService } from "../services/msal.service";

@Component({
  selector: "app-tab5",
  templateUrl: "tab5.page.html",
  styleUrls: ["tab5.page.scss"]
})
export class Tab5Page {
  constructor(private msalService: MsalService) {}
  logIn(event): void {
    this.msalService.login();
  }

  logOut(): void {
    this.msalService.logout();
    sessionStorage.clear();
  }

  isOnline(): boolean {
    return this.msalService.isOnline();
  }
}
