import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogTabAComponent } from './lazy-dialog-tab-a.component';

describe('LazyDialogTabAComponent', () => {
  let component: LazyDialogTabAComponent;
  let fixture: ComponentFixture<LazyDialogTabAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogTabAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogTabAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
