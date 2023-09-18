import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeMainComponent } from './poke-main/poke-main.component';
import { PokeDataComponent } from './poke-data/poke-data.component';

const routes: Routes = [
  {path: 'index', component: PokeMainComponent},
  {path: 'index/info/:id', component: PokeDataComponent},
  {path:'', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
