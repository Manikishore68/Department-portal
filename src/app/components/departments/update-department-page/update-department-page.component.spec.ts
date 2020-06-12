import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmentPageComponent } from './update-department-page.component';

describe('UpdateDepartmentPageComponent', () => {
  let component: UpdateDepartmentPageComponent;
  let fixture: ComponentFixture<UpdateDepartmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepartmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
