import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListWithDiComponent } from './hero-list-with-di.component';

describe('HeroListWithDiComponent', () => {
  let component: HeroListWithDiComponent;
  let fixture: ComponentFixture<HeroListWithDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListWithDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListWithDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
