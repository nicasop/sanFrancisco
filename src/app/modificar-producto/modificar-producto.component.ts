import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  idProducto:null | number = null;
  producto:any;
  imagenPro:string = '';
  imagenAdi:string = '';
  verSeleccion: string = '';
  constructor(private sanitizer: DomSanitizer, private router:Router ,private route:ActivatedRoute, private dataService:ProductDataService) {}

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

  modificar(){
    if (this.producto.stock >= 1 ){
      this.dataService.updateProducto(this.producto).subscribe(() => {
          console.log(this.producto);
        });
      this.router.navigateByUrl('administrador');
    }
  }

  capturarFile(event:any):any{
   const archivoCap = event.target.files[0];
   this.extraerBase64(archivoCap).then((imagen:any) => {
     this.producto.imagen = imagen.base;
   })
  }

  capturarFile1(event:any):any{
   const archivoCap = event.target.files[0];
   this.extraerBase64(archivoCap).then((imagen:any) => {
     this.producto.InformacionAdicional.imagen = imagen.base;
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
