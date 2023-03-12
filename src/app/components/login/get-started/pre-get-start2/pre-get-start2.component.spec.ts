import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGetStart2Component } from './pre-get-start2.component';

describe('PreGetStart2Component', () => {
  let component: PreGetStart2Component;
  let fixture: ComponentFixture<PreGetStart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreGetStart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreGetStart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
