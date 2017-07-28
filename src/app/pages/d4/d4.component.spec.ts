/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { D4Component } from './d4.component';

describe('D4Component', () => {
  let component: D4Component;
  let fixture: ComponentFixture<D4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
