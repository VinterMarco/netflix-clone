import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAndImagesComponent } from './info-and-images.component';

describe('InfoAndImagesComponent', () => {
  let component: InfoAndImagesComponent;
  let fixture: ComponentFixture<InfoAndImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAndImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAndImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
