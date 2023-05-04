import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogPageAComponent} from "./lazy-dialog-page-a/lazy-dialog-page-a.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyDialogPageAComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LazyDialogPageARoutingModule {}
