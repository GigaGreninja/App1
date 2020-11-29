/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScytheComponent } from './scythe.component';

describe('ScytheComponent', () => {
  let component: ScytheComponent;
  let fixture: ComponentFixture<ScytheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScytheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScytheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
