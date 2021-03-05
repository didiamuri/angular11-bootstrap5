import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedOnscrollComponent } from './fixed-onscroll.component';

describe('FixedOnscrollComponent', () => {
  let component: FixedOnscrollComponent;
  let fixture: ComponentFixture<FixedOnscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedOnscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedOnscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
