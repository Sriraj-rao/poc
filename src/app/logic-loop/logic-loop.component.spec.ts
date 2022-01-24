import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicLoopComponent } from './logic-loop.component';

describe('LogicLoopComponent', () => {
  let component: LogicLoopComponent;
  let fixture: ComponentFixture<LogicLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
