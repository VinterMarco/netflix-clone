import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAndImages2Component } from './info-and-images2.component';

describe('InfoAndImages2Component', () => {
  let component: InfoAndImages2Component;
  let fixture: ComponentFixture<InfoAndImages2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAndImages2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAndImages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
