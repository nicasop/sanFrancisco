export interface Product{
    id:number;
    nombre:string;
    stock:number;
    marca:string;
    categoria:string;
    imagen:string;
    descripcion:string;
    InformacionAdicional:{
            titulo:string;
            imagen:string;
        }
}