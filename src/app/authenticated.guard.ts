import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor (private router:Router){}

  canActivate(){
    const user = sessionStorage.getItem('usuario');
    if(user == null){
      console.log('El usuario no esta logueado');
      this.router.navigateByUrl('iniciar-sesion');
      return false;
    }
    return true; 
  }
  
}
