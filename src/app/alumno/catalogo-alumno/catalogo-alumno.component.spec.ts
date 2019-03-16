import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAlumnoComponent } from './catalogo-alumno.component';

describe('CatalogoAlumnoComponent', () => {
  let component: CatalogoAlumnoComponent;
  let fixture: ComponentFixture<CatalogoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
