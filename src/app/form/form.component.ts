import { Component } from '@angular/core';
import { PersonaService } from '../persona.service';
import { PersonaDTO } from './Persona-dto';
import { PersonasComunicacionService } from '../personas-comunicacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormularioComponent {
  persona: any = {};

  constructor(
    private personaService: PersonaService,
    private personasComunicacionService: PersonasComunicacionService
  ) {}

  onSubmit() {
    this.personaService.agregarPersona(this.persona).subscribe(() => {
      // Después de agregar la persona, notificar a los suscriptores
      this.personasComunicacionService.actualizarPersonas([this.persona]);
    });
  }
}
