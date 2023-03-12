import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterForLoginComponent } from './footer-for-login.component';

describe('FooterForLoginComponent', () => {
  let component: FooterForLoginComponent;
  let fixture: ComponentFixture<FooterForLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterForLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
