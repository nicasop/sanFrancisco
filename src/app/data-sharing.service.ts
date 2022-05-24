import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  public idUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(sessionStorage.getItem('usuario') == 'true');
}
