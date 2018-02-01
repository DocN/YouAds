import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwrapComponent } from './headwrap.component';

describe('HeadwrapComponent', () => {
  let component: HeadwrapComponent;
  let fixture: ComponentFixture<HeadwrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadwrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
