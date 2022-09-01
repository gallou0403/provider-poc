import {Component, Inject, OnInit} from '@angular/core';
import {THEME_INJECTION_TOKENS} from "../theme/constants/theme-injection-tokens.const";
import {BackgroundServiceInterface} from "../theme/interfaces/background-service.interface";
import {BorderServiceInterface} from "../theme/interfaces/border-service.interface";

@Component({
  selector: 'app-eager-a',
  templateUrl: './eager-a.component.html',
  styleUrls: ['./eager-a.component.css']
})
export class EagerAComponent implements OnInit {
  backgroundColor = this.backgroundService.getBackground();
  borderColor = this.borderService.getBorder();

  constructor(
    @Inject(THEME_INJECTION_TOKENS.backgroundService)
    private backgroundService: BackgroundServiceInterface,
    @Inject(THEME_INJECTION_TOKENS.borderService)
    private borderService: BorderServiceInterface
  ) { }

  ngOnInit(): void {
  }

}

