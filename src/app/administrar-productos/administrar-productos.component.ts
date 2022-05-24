import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {

  productos:Product[] = [];

  constructor(private dataService:ProductDataService) { 
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

  borrar(producto: Product): void {
    this.productos = this.productos.filter(h => h !== producto);
    this.dataService.deleteProducto(producto).subscribe();
  }

}
