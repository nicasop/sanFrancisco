import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:any;
  isUserLoggedIn!: boolean;
  menuPu = [{
    "titulo":"Historia",
    "clase":"",
    "url": "historia",
  },
  {
    "titulo":"Catálogo",
    "clase":"",
    "url": "catalogo",
  },
  {
    "titulo":"Iniciar Sesión",
    "clase":"sesion",
    "url": "iniciar-sesion",
  }]

  menuPri = [{
    "titulo":"Administrador",
    "clase":"",
    "url": "administrador",
  }]
  constructor(private router:Router, private dataSharingService:DataSharingService) {
    this.dataSharingService.idUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    })
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    this.dataSharingService.idUserLoggedIn.next(false);
    console.log('Sesión Cerrada');
    this.router.navigateByUrl('');
  }
}
