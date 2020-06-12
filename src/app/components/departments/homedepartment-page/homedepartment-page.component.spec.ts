import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedepartmentPageComponent } from './homedepartment-page.component';

describe('HomedepartmentPageComponent', () => {
  let component: HomedepartmentPageComponent;
  let fixture: ComponentFixture<HomedepartmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedepartmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
