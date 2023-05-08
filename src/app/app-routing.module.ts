import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'a',
        loadChildren: () => import('./dynamic-providers-poc/lazy-a/lazy-a.module').then(m => m.LazyAModule)
      },
      {
        path: 'b',
        loadChildren: () => import('./dynamic-providers-poc/lazy-b/lazy-b.module').then(m => m.LazyBModule)
      },
      {
        path: 'c',
        loadChildren: () => import('./dynamic-providers-poc/lazy-c/lazy-c.module').then(m => m.LazyCModule)
      },
      {
        path: 'heroes',
        loadChildren: () => import('./ngrx-poc/hero-list/hero-list.module').then(m => m.HeroListModule)
      },
      {
        path: 'heroes/hero',
        loadChildren: () => import('./ngrx-poc/hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
      },
      {
        path: 'rxjs',
        loadChildren: () => import('./rxjs-playground/rxjs-playground.module').then(m => m.RxjsPlaygroundModule)
      },
      {
        path: 'lazy-dialog',
        loadChildren: () => import('./lazy-dialogs/lazy-dialogs.module').then(m => m.LazyDialogsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
