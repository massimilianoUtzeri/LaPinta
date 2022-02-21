import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BebidasCalientesComponent } from './pages/bebidas-calientes/bebidas-calientes.component';
import { BocadillosComponent } from './pages/bocadillos/bocadillos.component';
import { RefrescosComponent } from './pages/refrescos/refrescos.component';
import { CroissantsComponent } from './pages/croissants/croissants.component';
import { ImageSliderComponent } from './image-slider-component/image-slider-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    BebidasCalientesComponent,
    BocadillosComponent,
    RefrescosComponent,
    CroissantsComponent,
    ImageSliderComponent,
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
