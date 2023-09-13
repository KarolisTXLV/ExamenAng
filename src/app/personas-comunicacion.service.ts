import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasComunicacionService {
  private personasSubject = new BehaviorSubject<any[]>([]);
  personas$ = this.personasSubject.asObservable();

  actualizarPersonas(personas: any[] ) {
    this.personasSubject.next(personas);
  }
}
