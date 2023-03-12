import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAndImages4Component } from './info-and-images4.component';

describe('InfoAndImages4Component', () => {
  let component: InfoAndImages4Component;
  let fixture: ComponentFixture<InfoAndImages4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAndImages4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAndImages4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
