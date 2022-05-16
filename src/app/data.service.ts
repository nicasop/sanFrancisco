import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient){
    console.log('El servicio HTTP esta funcionando');
  }

  obtenerDatos(){
    return this.httpclient.get<Product[]>('assets/datos/productos.json');
  }

}
