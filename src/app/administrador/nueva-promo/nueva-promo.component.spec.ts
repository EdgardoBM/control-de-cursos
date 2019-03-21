import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPromoComponent } from './nueva-promo.component';

describe('NuevaPromoComponent', () => {
  let component: NuevaPromoComponent;
  let fixture: ComponentFixture<NuevaPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
