import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogShellComponent } from './lazy-dialog-shell.component';

describe('LazyDialogShellComponent', () => {
  let component: LazyDialogShellComponent;
  let fixture: ComponentFixture<LazyDialogShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
