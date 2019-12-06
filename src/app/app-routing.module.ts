import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonsComponent } from './salons/salons.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'salons', component: SalonsComponent },
  { path: '',
      redirectTo: '/salons',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
