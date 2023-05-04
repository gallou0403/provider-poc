import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogShellComponent} from "./modules/lazy-dialog-shell";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyDialogShellComponent,
        children: [
          {
            path: 'page-a',
            loadChildren: () => import('./modules/lazy-dialog-page-a').then(m => m.LazyDialogPageAModule)
          },
          {
            path: 'page-b',
            loadChildren: () => import('./modules/lazy-dialog-page-b').then(m => m.LazyDialogPageBModule)
          },
          {
            path: '',
            redirectTo: 'page-a',
            pathMatch: 'full'
          }
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LazyDialogRoutingModule {}
