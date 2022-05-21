import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {

  productos:Product[] = [];

  constructor(private dataServide:DataService) { 
    this.dataServide.obtenerDatos().subscribe(data => {
      this.productos = data;
    })
  }

  ngOnInit(): void {
  }

}
