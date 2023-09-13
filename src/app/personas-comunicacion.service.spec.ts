import { TestBed } from '@angular/core/testing';

import { PersonasComunicacionService } from './personas-comunicacion.service';

describe('PersonasComunicacionService', () => {
  let service: PersonasComunicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasComunicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
