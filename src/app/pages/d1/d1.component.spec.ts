/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { D1Component } from './d1.component';

describe('D1Component', () => {
  let component: D1Component;
  let fixture: ComponentFixture<D1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
