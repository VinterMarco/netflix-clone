import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAndImages3Component } from './info-and-images3.component';

describe('InfoAndImages3Component', () => {
  let component: InfoAndImages3Component;
  let fixture: ComponentFixture<InfoAndImages3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAndImages3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAndImages3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
