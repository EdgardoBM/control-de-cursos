import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesDetallesComponent } from './promociones-detalles.component';

describe('PromocionesDetallesComponent', () => {
  let component: PromocionesDetallesComponent;
  let fixture: ComponentFixture<PromocionesDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
