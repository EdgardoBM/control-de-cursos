import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMarketerComponent } from './nav-bar-marketer.component';

describe('NavBarMarketerComponent', () => {
  let component: NavBarMarketerComponent;
  let fixture: ComponentFixture<NavBarMarketerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMarketerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
