import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
  




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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MdbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
