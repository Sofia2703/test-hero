import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule, routingComponentsHero} from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';


@NgModule({
  declarations: [
    HeroesComponent,
    routingComponentsHero
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
