import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFrameComponent } from './player-frame.component';

describe('PlayerFrameComponent', () => {
  let component: PlayerFrameComponent;
  let fixture: ComponentFixture<PlayerFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
