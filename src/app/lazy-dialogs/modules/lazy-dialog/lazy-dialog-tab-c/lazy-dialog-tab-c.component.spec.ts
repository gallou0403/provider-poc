import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogTabCComponent } from './lazy-dialog-tab-c.component';

describe('LazyDialogTabCComponent', () => {
  let component: LazyDialogTabCComponent;
  let fixture: ComponentFixture<LazyDialogTabCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogTabCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogTabCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
