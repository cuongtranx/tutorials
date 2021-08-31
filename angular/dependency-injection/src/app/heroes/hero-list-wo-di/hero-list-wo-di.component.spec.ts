import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListWoDiComponent } from './hero-list-wo-di.component';

describe('HeroListWoDiComponent', () => {
  let component: HeroListWoDiComponent;
  let fixture: ComponentFixture<HeroListWoDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListWoDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListWoDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
