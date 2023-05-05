import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LazyDialogShellComponent} from "./lazy-dialog-shell.component";

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
            path: 'tabs',
            outlet: 'globalDialog',
            loadChildren: () => import('./modules/lazy-dialog').then(m => m.LazyDialogModule)
          },
          {
            path: 'lazy-tab-a',
            outlet: 'lazyDialogTab',
            loadChildren: () => import('./modules/lazy-dialog/lazy-dialog-tab-a/lazy-dialog-tab-a.module').then(m => m.LazyDialogTabAModule)
          },
          {
            path: 'lazy-tab-b',
            outlet: 'lazyDialogTab',
            loadChildren: () => import('./modules/lazy-dialog/lazy-dialog-tab-b/lazy-dialog-tab-b.module').then(m => m.LazyDialogTabBModule)
          },
          {
            path: 'lazy-tab-c',
            outlet: 'lazyDialogTab',
            loadChildren: () => import('./modules/lazy-dialog/lazy-dialog-tab-c/lazy-dialog-tab-c.module').then(m => m.LazyDialogTabCModule)
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
export class LazyDialogsRoutingModule {}
