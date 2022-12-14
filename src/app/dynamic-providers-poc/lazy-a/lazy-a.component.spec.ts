import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAComponent } from './lazy-a.component';

describe('LazyAComponent', () => {
  let component: LazyAComponent;
  let fixture: ComponentFixture<LazyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
