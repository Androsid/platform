import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToirComponent } from './toir.component';

describe('ToirComponent', () => {
  let component: ToirComponent;
  let fixture: ComponentFixture<ToirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
