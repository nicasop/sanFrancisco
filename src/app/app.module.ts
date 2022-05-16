import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HistoriaComponent } from './historia/historia.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';

const rutas:Route[]=[
  {path: 'historia', component:HistoriaComponent},
  {path: 'catalogo', component:CatalogoComponent},
  // {path: 'producto', component:ReporteComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HistoriaComponent,
    FooterComponent,
    CatalogoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
