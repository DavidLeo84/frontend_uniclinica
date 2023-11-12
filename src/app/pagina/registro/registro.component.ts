import { Component } from '@angular/core';
import { RegistroMedicoDTO } from 'src/app/modelo/registro-medico-dto';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroMedicoDTO: RegistroMedicoDTO;
  registroPacienteDTO: RegistroPacienteDTO;
  eps: string[];
  ciudades: string[];
  tipoSangre: string[];
  archivos!: FileList;

  private cargarEps() {
    this.eps.push("Sanitas");
    this.eps.push("Coomeva");
    this.eps.push("Nueva eps");
  }


  private cargarCiudades() {
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarcá");
    this.ciudades.push("Pereira");
    this.ciudades.push("Manizales");
    this.ciudades.push("Medellín");
  }

  private cargarTipoSangre() {
    this.tipoSangre.push("A+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("AB-");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("O-");
  }

  constructor() {
    this.registroMedicoDTO = new RegistroMedicoDTO();
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
    }
  }

  public registrar() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.registroPacienteDTO);
    } else {
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales(): boolean {
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

}
