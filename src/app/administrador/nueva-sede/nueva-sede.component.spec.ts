import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSedeComponent } from './nueva-sede.component';

describe('NuevaSedeComponent', () => {
  let component: NuevaSedeComponent;
  let fixture: ComponentFixture<NuevaSedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaSedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
