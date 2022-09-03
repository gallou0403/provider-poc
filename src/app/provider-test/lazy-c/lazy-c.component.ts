import {Component, Inject, OnInit} from '@angular/core';
import {THEME_INJECTION_TOKENS} from "../../data-access/theme/constants/theme-injection-tokens.const";
import {BackgroundServiceInterface} from "../../data-access/theme/interfaces/background-service.interface";
import {BorderServiceInterface} from "../../data-access/theme/interfaces/border-service.interface";
import {BackgroundService} from "../../data-access/theme/services/background.service";
import {BorderService} from "../../data-access/theme/services/border.service";

@Component({
  selector: 'app-lazy-c',
  templateUrl: './lazy-c.component.html',
  styleUrls: ['./lazy-c.component.css']
})
export class LazyCComponent implements OnInit {
  backgroundColor = this.backgroundService.getBackground();
  borderColor = this.borderService.getBorder();

  constructor(
    private backgroundService: BackgroundService,
    private borderService: BorderService
  ) { }

  ngOnInit(): void {
  }

}
