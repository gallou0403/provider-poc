import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogPageAComponent } from './lazy-dialog-page-a.component';

describe('LazyDialogPageAComponent', () => {
  let component: LazyDialogPageAComponent;
  let fixture: ComponentFixture<LazyDialogPageAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogPageAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
