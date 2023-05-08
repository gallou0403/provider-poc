import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyDialogComponent {
  tabs: Record<string, string> = {
    'lazy-tab-a': 'Lazy Tab A',
    'lazy-tab-b': 'Lazy Tab B',
    'lazy-tab-c': 'Lazy Tab C',
  };

  constructor(private route: ActivatedRoute) {
  }

  isTabActive(tab: string) {
    return this.route.snapshot.firstChild?.url?.[0].path === tab;
  }
}
