import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardRowComponent } from './employee-card-row.component';

describe('EmployeeCardRowComponent', () => {
  let component: EmployeeCardRowComponent;
  let fixture: ComponentFixture<EmployeeCardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
