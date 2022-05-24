import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:Product[] = [];

  constructor( private dataService:ProductDataService) { 
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.dataService.getProductos().subscribe(data => 
      {
        this.productos = data;  
      })
  }

}
