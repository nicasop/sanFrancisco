import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  username:any;
  password:any;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username);
    console.log(this.password);
  }

}
