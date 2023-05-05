import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogTabBComponent } from './lazy-dialog-tab-b.component';

describe('LazyDialogTabBComponent', () => {
  let component: LazyDialogTabBComponent;
  let fixture: ComponentFixture<LazyDialogTabBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogTabBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogTabBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
