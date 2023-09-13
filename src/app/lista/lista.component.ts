import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { PersonasComunicacionService } from '../personas-comunicacion.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaPersonasComponent implements OnInit {
  personas: any[] = [];

  constructor(private personaService: PersonaService, private personasComunicacionService: PersonasComunicacionService) { }

  ngOnInit(): void {
    this.personaService.obtenerUltimas10MayoresDe21()
      .subscribe(
        (data: any) => {
          this.personas = data;
        },
        error => {
          console.error('Error al obtener personas', error);
        }
      );

    // Escucha cambios en las personas
    this.personasComunicacionService.personas$.subscribe((nuevasPersonas: any[]) => {
      this.personas = nuevasPersonas;
    });
  }
}
