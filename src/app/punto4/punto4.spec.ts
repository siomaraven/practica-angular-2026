import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto4Component } from './punto4';

describe('Punto4Component', () => {
  let component: Punto4Component;
  let fixture: ComponentFixture<Punto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Punto4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
