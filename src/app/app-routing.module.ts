import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { BebidasCalientesComponent } from './pages/bebidas-calientes/bebidas-calientes.component';
import { MainComponent             } from './pages/main/main.component';
import { MenuComponent             } from './pages/menu/menu.component';
import { RefrescosComponent        } from './pages/refrescos/refrescos.component';
import { CroissantsComponent       } from './pages/croissants/croissants.component';

const routes: Routes = [

    {
      path: '',
      component: MainComponent
    },
    
    {
      path: 'menu',
      component: MenuComponent
    },

    {
      path: 'menu/bebidas-calientes',
      component: BebidasCalientesComponent
    },

    {
      path: 'menu/refrescos',
      component: RefrescosComponent
    },

    {
      path: 'menu/croissants',
      component: CroissantsComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
