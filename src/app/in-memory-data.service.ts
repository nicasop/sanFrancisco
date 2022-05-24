import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import listadoProductos from 'src/assets/datos/productos.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const productos = listadoProductos;
    console.log(productos);
    return {productos}; 
  }

}
