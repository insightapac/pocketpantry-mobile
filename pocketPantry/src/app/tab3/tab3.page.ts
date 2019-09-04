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
  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get("myid");
  }
}
