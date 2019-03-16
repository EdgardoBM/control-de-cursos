import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscripcionesComponent } from './preinscripciones.component';

describe('PreinscripcionesComponent', () => {
  let component: PreinscripcionesComponent;
  let fixture: ComponentFixture<PreinscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreinscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreinscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
