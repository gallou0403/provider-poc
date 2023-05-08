import {Component, Inject, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.scss']
})
export class LazyDialogComponent implements OnDestroy {
  activeIndex$: Observable<number> = this.data.route.paramMap.pipe(
    map(params => {
      console.log(this.data.route.snapshot)
      const index = params.get('tabIndex');
      return index;
    }),
    filter(Boolean),
    map(tabIndex => Number(tabIndex))
  );

  constructor(@Inject(MAT_DIALOG_DATA) public data: { route: ActivatedRoute },
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnDestroy() {
    // todo: is there any way to know exactly which route we need to clear the outlet from?
    this.router.navigate(['.', { outlets: { globalDialog: null}}], {
      relativeTo: this.data.route.parent?.parent?.parent
    });
  }

  onTabChange(newIndex: number) {
    this.router.navigate(['../', newIndex], {relativeTo: this.data.route});
  }
}

// const findOutletRoute = (route: ActivatedRoute): ActivatedRoute => {
//   if (route.outlet === 'tabs') return route;
//
//   return route.children.reduce((acc, child) => {
//     if (acc) return acc;
//     return findOutletRoute(child);
//   }, route);
// }
//
// const mergeParams = (route: ActivatedRoute) => {
//   // @ts-ignore
//   return route.snapshot.children.reduce((acc, child) => {
//     if (child.params) return {
//       ...acc,
//       ...child.params
//     };
//   }, route.snapshot.params);
// };
