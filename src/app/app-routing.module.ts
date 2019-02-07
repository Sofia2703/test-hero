import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { TestMaterialComponent } from './test-material/test-material.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'test-material', component: TestMaterialComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // ,CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents  = [HeroesComponent,TestMaterialComponent]