import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGetStart3Component } from './pre-get-start3.component';

describe('PreGetStart3Component', () => {
  let component: PreGetStart3Component;
  let fixture: ComponentFixture<PreGetStart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreGetStart3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreGetStart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
