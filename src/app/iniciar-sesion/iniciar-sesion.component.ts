import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  username:any;
  usuarioC = 'nicasop';
  contrasenaC = 12345;
  password:any;
  error: Boolean = false;

  constructor(public router : Router, private dataSharingService:DataSharingService) { }

  ngOnInit(): void {
  }

  login(){
    this.error = false;
    if (this.username == this.usuarioC && this.password == this.contrasenaC){
      console.log('Usuario correcto');
      this.setAuth();
      this.router.navigateByUrl('administrador');
      console.log(this.getAuth());
      this.dataSharingService.idUserLoggedIn.next(true);
    }
    else{
      console.log('mal');
      this.error = true;
      this.username = '';
      this.password = '';
    }
  }
  setAuth(){
    sessionStorage.setItem('usuario','true');
  }

  getAuth(){
    return sessionStorage.getItem('usuario');
  }

  removeAuth(){
    sessionStorage.removeItem('usuario');
  }

}
