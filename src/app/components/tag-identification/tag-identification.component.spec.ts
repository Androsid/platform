import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagIdentificationComponent } from './tag-identification.component';

describe('TagIdentificationComponent', () => {
  let component: TagIdentificationComponent;
  let fixture: ComponentFixture<TagIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
