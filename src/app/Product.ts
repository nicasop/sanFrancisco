export interface Product{
    "codigo":string;
    "nombre":string;
    "stock":number;
    "marca":string;
    "imagen":string;
    "descripcion":string;
    "descripCorta":string;
    "especificaciones":[
        {
            "medida":number;
            "peso":number;
            "precio":number;
        }
    ]
}