import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { TestMaterialComponent } from '../test-material/test-material.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'test-material', component: TestMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
export const routingComponentsHero  = [HeroesComponent,TestMaterialComponent]