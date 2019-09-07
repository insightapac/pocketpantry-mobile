import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  myId = null;

  constructor(private activatedRoute: ActivatedRoute) {}
  
  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get("myid");
  }
}
