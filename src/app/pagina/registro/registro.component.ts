import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  eps: string[];
  ciudades: string[];
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

  constructor() {
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
    this.eps = [];
    this.cargarEps();
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
