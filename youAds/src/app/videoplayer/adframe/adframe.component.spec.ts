import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdframeComponent } from './adframe.component';

describe('AdframeComponent', () => {
  let component: AdframeComponent;
  let fixture: ComponentFixture<AdframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
