import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'a',
        loadChildren: () => import('./lazy-a/lazy-a.module').then(m => m.LazyAModule)
      },
      {
        path: 'b',
        loadChildren: () => import('./lazy-b/lazy-b.module').then(m => m.LazyBModule)
      },
      {
        path: 'c',
        loadChildren: () => import('./lazy-c/lazy-c.module').then(m => m.LazyCModule)
      },
      {
        path: 'heroes',
        loadChildren: () => import('./heroes/hero-list/hero-list.module').then(m => m.HeroListModule)
      },
      {
        path: 'heroes/:id',
        loadChildren: () => import('./heroes/hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
