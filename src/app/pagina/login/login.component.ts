import { Component } from '@angular/core';
import { LoginDTO } from 'src/app/modelo/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDTO: LoginDTO;
  archivos!: FileList;

  constructor(){
    this.loginDTO = new LoginDTO();
  }

  public login(){
    if (this.archivos != null && this.archivos.length > 0){

      console.log(this.loginDTO);
    } else {
      console.log("Están vacíos los campos");
    }
}

}