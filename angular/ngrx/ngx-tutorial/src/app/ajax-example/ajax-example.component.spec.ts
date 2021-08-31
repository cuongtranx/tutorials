import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AjaxExampleComponent } from "./ajax-example.component";

describe("AjaxExampleComponent", () => {
  let component: AjaxExampleComponent;
  let fixture: ComponentFixture<AjaxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjaxExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
