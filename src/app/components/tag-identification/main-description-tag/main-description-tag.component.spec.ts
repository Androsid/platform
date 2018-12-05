import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDescriptionTagComponent } from './main-description-tag.component';

describe('MainDescriptionTagComponent', () => {
  let component: MainDescriptionTagComponent;
  let fixture: ComponentFixture<MainDescriptionTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDescriptionTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDescriptionTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
