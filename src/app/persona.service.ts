import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerUltimas10MayoresDe21() {
    return this.http.get(this.apiUrl);
  }

  agregarPersona(persona: any | undefined) {
    return this.http.post(this.apiUrl, persona)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
