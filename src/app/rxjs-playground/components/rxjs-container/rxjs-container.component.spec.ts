import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsContainerComponent } from './rxjs-container.component';

describe('RxjsContainerComponent', () => {
  let component: RxjsContainerComponent;
  let fixture: ComponentFixture<RxjsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
