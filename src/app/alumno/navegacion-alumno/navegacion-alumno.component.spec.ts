import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionAlumnoComponent } from './navegacion-alumno.component';

describe('NavegacionAlumnoComponent', () => {
  let component: NavegacionAlumnoComponent;
  let fixture: ComponentFixture<NavegacionAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
