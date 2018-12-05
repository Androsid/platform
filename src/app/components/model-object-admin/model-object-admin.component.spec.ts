import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelObjectAdminComponent } from './model-object-admin.component';

describe('ModelObjectAdminComponent', () => {
  let component: ModelObjectAdminComponent;
  let fixture: ComponentFixture<ModelObjectAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelObjectAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelObjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
