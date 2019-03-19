import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosMarketerComponent } from './eventos-marketer.component';

describe('EventosMarketerComponent', () => {
  let component: EventosMarketerComponent;
  let fixture: ComponentFixture<EventosMarketerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosMarketerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosMarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
