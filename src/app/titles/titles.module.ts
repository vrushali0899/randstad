import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';
import { TitlesRoutingModule } from './titles-routing.module';



@NgModule({
  declarations: [
    TitlesComponent
  ],
  imports: [
    CommonModule,
    TitlesRoutingModule
  ]
})
export class TitlesModule { }
