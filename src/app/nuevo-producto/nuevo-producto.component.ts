import { Component,OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})

export class NuevoProductoComponent implements OnInit {
  productos:Product[] = [];
  nombre:any;
  descrip:any;
  stock:number=100;
  marca:any;
  titulo:any;
  imagenPro:string = '';
  imagenAdi:string = '';
  categoria:string = '';
  verSeleccion: string = '';
  constructor(private sanitizer: DomSanitizer, private router:Router, private dataService:ProductDataService) { 
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
  registrar(){
    console.log(this.nombre);
    console.log(this.descrip);
    console.log(this.descrip.substr(0,5));
    console.log(this.stock);
    console.log(this.imagenPro);
    console.log(this.imagenAdi);
    console.log(this.verSeleccion);
    if (this.stock >= 1 ){
      this.dataService.addProducto({
          descripcion: this.descrip,
          imagen: this.imagenPro, nombre: this.nombre, stock: this.stock,
          marca: this.marca} as Product)
        .subscribe(producto => {
          this.productos.push(producto);
          console.log(this.productos);
        });
      this.router.navigateByUrl('administrador');
    }
  }

  capturar() {
    this.verSeleccion = this.categoria;
  }

  capturarFile(event:any):any{
   const archivoCap = event.target.files[0];
   this.extraerBase64(archivoCap).then((imagen:any) => {
     this.imagenPro = imagen.base;
   })
  }

  capturarFile1(event:any):any{
   const archivoCap = event.target.files[0];
   this.extraerBase64(archivoCap).then((imagen:any) => {
     this.imagenAdi = imagen.base;
   })
  }

   extraerBase64 = async ($event: any) => new Promise((resolve,reject) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = _error => {
        resolve({
          base: null
        });
      };
      return ;
    } catch (e) {
      return null;
    }
  })
}
