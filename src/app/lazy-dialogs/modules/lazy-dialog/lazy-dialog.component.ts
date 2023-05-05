import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrls: ['./lazy-dialog.component.scss']
})
export class LazyDialogComponent {
  links = ['lazy-tab-a', 'lazy-tab-b', 'lazy-tab-c'];
  activeLink: string = this.links[0];
}
