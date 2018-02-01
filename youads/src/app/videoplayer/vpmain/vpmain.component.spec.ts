import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpmainComponent } from './vpmain.component';

describe('VpmainComponent', () => {
  let component: VpmainComponent;
  let fixture: ComponentFixture<VpmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
