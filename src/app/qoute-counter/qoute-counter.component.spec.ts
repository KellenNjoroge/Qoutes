import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteCounterComponent } from './qoute-counter.component';

describe('QouteCounterComponent', () => {
  let component: QouteCounterComponent;
  let fixture: ComponentFixture<QouteCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
