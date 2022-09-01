import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerAComponent } from './eager-a.component';

describe('EagerAComponent', () => {
  let component: EagerAComponent;
  let fixture: ComponentFixture<EagerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
