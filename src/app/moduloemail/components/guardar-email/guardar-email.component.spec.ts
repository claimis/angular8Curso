/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuardarEmailComponent } from './guardar-email.component';

describe('GuardarEmailComponent', () => {
  let component: GuardarEmailComponent;
  let fixture: ComponentFixture<GuardarEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
