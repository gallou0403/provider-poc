import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerAComponent } from './eager-a.component';



@NgModule({
  declarations: [
    EagerAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EagerAComponent
  ]
})
export class EagerAModule { }
