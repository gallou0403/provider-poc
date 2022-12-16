import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatusControlComponent } from './hero-status-control.component';

describe('HeroStatusControlComponent', () => {
  let component: HeroStatusControlComponent;
  let fixture: ComponentFixture<HeroStatusControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroStatusControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroStatusControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
