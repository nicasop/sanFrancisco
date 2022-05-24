import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProducto:null | number = null;
  producto:Product | null = null ;

  constructor( private route: ActivatedRoute, private dataService:ProductDataService) { 
  }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    this.idProducto = Number(this.route.snapshot.paramMap.get('codigo'));
    console.log(this.idProducto);
    this.dataService.getProducto(this.idProducto).subscribe(data => {
      this.producto = data;
    });
  }

}
