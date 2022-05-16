import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProducto:null | string = null;
  inventario:Product[] = [];
  productoSelesc:Product | null = null;

  constructor( private _route: ActivatedRoute, private dataService:DataService) { 
    this.idProducto = this._route.snapshot.paramMap.get('id');
    console.log(this.idProducto);
    this.dataService.obtenerDatos().subscribe(data => 
      {
        this.inventario = data;  
        console.log(this.inventario);
      })
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    var producto;
    this.inventario.forEach(element => {
      if(element.codigo == this.idProducto){
        this.productoSelesc = element;
      } 
    }); 
    
  }

}
