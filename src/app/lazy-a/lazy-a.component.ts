import {Component, Inject, OnInit} from '@angular/core';
import {THEME_INJECTION_TOKENS} from "../theme/constants/theme-injection-tokens.const";
import {BorderServiceInterface} from "../theme/interfaces/border-service.interface";
import {BackgroundServiceInterface} from "../theme/interfaces/background-service.interface";

@Component({
  selector: 'app-lazy-a',
  templateUrl: './lazy-a.component.html',
  styleUrls: ['./lazy-a.component.css']
})
export class LazyAComponent implements OnInit {
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
