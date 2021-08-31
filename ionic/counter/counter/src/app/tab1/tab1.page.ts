import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  public counter = 0;
  public clickEvents = 0;

  constructor() {}

  public inc(): void {
    this.counter += 1;
  }

  @HostListener("click")
  handleClick() {
    console.log(this.clickEvents++);
  }
}
