import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from './Product';
import { Observable,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private producURL = 'api/productos';

  httpOptions = {
    headers: new HttpHeaders({ 'ContentType': 'applications/json'})
  };

  constructor(private http:HttpClient,private messageService:MessageService) { 
    console.log('El servicio HTTP esta funcionando');
  }
  //GET 
  getProductos():Observable<Product[]>{
    return this.http.get<Product[]>(this.producURL)
    .pipe(
      tap(_ => this.log('fetched productos')),
      catchError(this.handleError<Product[]>('getProductos',[]))
    );
  }

  getProducto<Data>(codigo: number): Observable<Product> {
    const url = `${this.producURL}/?id=${codigo}`;
    return this.http.get<Product[]>(url).pipe(
      map(productos => productos[0]),
      tap(_ => this.log(`fetched producto id=${codigo}`)),
      catchError(this.handleError<Product>(`producto id=${codigo}`))
    );
  }

  //POST 
  addProducto(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.producURL, producto, this.httpOptions).pipe(
      tap((newProducto: Product) => this.log(`added producto w/ id=${newProducto.id}`)),
      catchError(this.handleError<Product>('addProducto'))
    );
  }

  //DELETE
 deleteProducto(producto: Product | number): Observable<Product> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url = `${this.producURL}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted producto id=${id}`)),
      catchError(this.handleError<Product>('deleteProducto'))
    );
  }

  //PUT 
  updateProducto(producto: Product): Observable<any> {
    return this.http.put(this.producURL, producto, this.httpOptions).pipe(
      tap(_ => this.log(`updated producto id=${producto.id}`)),
      catchError(this.handleError<any>('updateProducto'))
    );
  }


  /**
  @param operation
  @param operation
  */
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
