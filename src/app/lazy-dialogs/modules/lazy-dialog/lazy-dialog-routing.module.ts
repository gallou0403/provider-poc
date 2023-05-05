import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogContainerComponent} from "./lazy-dialog-container.component";
import {LazyDialogPortalComponent} from "./lazy-dialog-portal/lazy-dialog-portal.component";

@NgModule({
    imports: [RouterModule.forChild([
      {
        path: '',
        component: LazyDialogContainerComponent,
      },
      {
        path: 'lazy-tab-a',
        outlet: 'lazyDialogTab',
        loadChildren: () => import('./lazy-dialog-tab-a/lazy-dialog-tab-a.module').then(m => m.LazyDialogTabAModule)
      },
      {
        path: 'lazy-tab-b',
        outlet: 'lazyDialogTab',
        loadChildren: () => import('./lazy-dialog-tab-b/lazy-dialog-tab-b.module').then(m => m.LazyDialogTabBModule)
      },
      {
        path: 'lazy-tab-c',
        outlet: 'lazyDialogTab',
        loadChildren: () => import('./lazy-dialog-tab-c/lazy-dialog-tab-c.module').then(m => m.LazyDialogTabCModule)
      },
    ])],
    exports: [RouterModule]
})
export class LazyDialogRoutingModule {}
