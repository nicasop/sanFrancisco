import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HistoriaComponent } from './historia/historia.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';

import { DataSharingService } from './data-sharing.service';
import { InMemoryDataService } from './in-memory-data.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { MessageService } from './message.service';
import { ProductDataService } from './product-data.service';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';

const rutas:Route[]=[
  {path: '', component:HistoriaComponent,pathMatch:'full'},
  {path: 'historia', component:HistoriaComponent},
  {path: 'catalogo', component:CatalogoComponent},
  {path: 'producto/:codigo', component:ProductoComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'administrador',component:AdministrarProductosComponent, canActivate:[AuthenticatedGuard]},
  {path: 'nuevo-producto',component:NuevoProductoComponent, canActivate:[AuthenticatedGuard]},
  {path: 'modificar-producto/:codigo',component:ModificarProductoComponent, canActivate:[AuthenticatedGuard]},
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
    AdministrarProductosComponent,
    NuevoProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation: false}
    ),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthenticatedGuard,DataSharingService,MessageService,ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
