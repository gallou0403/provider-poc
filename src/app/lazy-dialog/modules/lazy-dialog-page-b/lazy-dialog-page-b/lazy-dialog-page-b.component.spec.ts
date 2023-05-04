import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogPageBComponent } from './lazy-dialog-page-b.component';

describe('LazyDialogPageBComponent', () => {
  let component: LazyDialogPageBComponent;
  let fixture: ComponentFixture<LazyDialogPageBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogPageBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
