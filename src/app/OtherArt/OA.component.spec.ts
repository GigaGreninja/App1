/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OAComponent } from './OA.component';

describe('OAComponent', () => {
  let component: OAComponent;
  let fixture: ComponentFixture<OAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
