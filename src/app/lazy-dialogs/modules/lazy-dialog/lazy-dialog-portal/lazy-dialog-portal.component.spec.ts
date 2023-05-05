import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogPortalComponent } from './lazy-dialog-portal.component';

describe('LazyDialogPortalComponent', () => {
  let component: LazyDialogPortalComponent;
  let fixture: ComponentFixture<LazyDialogPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyDialogPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
