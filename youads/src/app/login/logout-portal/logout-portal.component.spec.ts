import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPortalComponent } from './logout-portal.component';

describe('LogoutPortalComponent', () => {
  let component: LogoutPortalComponent;
  let fixture: ComponentFixture<LogoutPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
