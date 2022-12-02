import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellerComponent } from './canceller.component';

describe('CancellerComponent', () => {
  let component: CancellerComponent;
  let fixture: ComponentFixture<CancellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
