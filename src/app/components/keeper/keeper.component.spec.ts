/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeeperComponent } from './keeper.component';

describe('KeeperComponent', () => {
  let component: KeeperComponent;
  let fixture: ComponentFixture<KeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
