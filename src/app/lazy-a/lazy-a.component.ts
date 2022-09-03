import {Component, Inject, OnInit} from '@angular/core';
import {THEME_INJECTION_TOKENS} from "../data-access/theme/constants/theme-injection-tokens.const";
import {BorderServiceInterface} from "../data-access/theme/interfaces/border-service.interface";
import {BackgroundServiceInterface} from "../data-access/theme/interfaces/background-service.interface";
import {BackgroundService} from "../data-access/theme/services/background.service";
import {BorderService} from "../data-access/theme/services/border.service";

@Component({
  selector: 'app-lazy-a',
  templateUrl: './lazy-a.component.html',
  styleUrls: ['./lazy-a.component.css']
})
export class LazyAComponent implements OnInit {
  backgroundColor = this.backgroundService.getBackground();
  borderColor = this.borderService.getBorder();

  constructor(
    private backgroundService: BackgroundService,
    private borderService: BorderService
  ) { }

  ngOnInit(): void {
  }

}
