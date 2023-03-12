import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGetStart1Component } from './pre-get-start1.component';

describe('PreGetStart1Component', () => {
  let component: PreGetStart1Component;
  let fixture: ComponentFixture<PreGetStart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreGetStart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreGetStart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
