import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogContainerComponent} from "./lazy-dialog-container.component";

@NgModule({
    imports: [RouterModule.forChild([
      {
        path: '',
        redirectTo: '0',
        pathMatch: 'full'
      },
      {
        path: ':tabIndex',
        component: LazyDialogContainerComponent,
      }
    ])],
    exports: [RouterModule]
})
export class LazyDialogRoutingModule {}
