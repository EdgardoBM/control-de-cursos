import { TestBed } from '@angular/core/testing';

import { ProspectoService } from './prospecto.service';

describe('ProspectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProspectoService = TestBed.get(ProspectoService);
    expect(service).toBeTruthy();
  });
});
