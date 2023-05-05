import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogPageBComponent} from "./lazy-dialog-page-b/lazy-dialog-page-b.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyDialogPageBComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LazyDialogPageBRoutingModule {
}
