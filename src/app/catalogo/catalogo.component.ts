import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:Product[] = [];

  constructor( private dataService:DataService) { 
    this.dataService.obtenerDatos().subscribe(data => 
      {
        this.productos = data;  
        console.log(this.productos);
      })
  }

  ngOnInit(): void {
  }

}
