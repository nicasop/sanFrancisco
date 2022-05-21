import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HistoriaComponent } from './historia/historia.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';

import { DataService } from './data.service';
import { DataSharingService } from './data-sharing.service';

import { AuthenticatedGuard } from './authenticated.guard';

const rutas:Route[]=[
  {path: '', component:HistoriaComponent,pathMatch:'full'},
  {path: 'historia', component:HistoriaComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'producto/:id', component:ProductoComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'administrador',component:AdministrarProductosComponent, canActivate:[AuthenticatedGuard]},
  {path: '**', redirectTo:''}
]; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HistoriaComponent,
    FooterComponent,
    CatalogoComponent,
    ProductoComponent,
    IniciarSesionComponent,
    AdministrarProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [DataService,AuthenticatedGuard,DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
