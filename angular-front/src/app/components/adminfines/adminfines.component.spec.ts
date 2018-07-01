import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfinesComponent } from './adminfines.component';

describe('AdminfinesComponent', () => {
  let component: AdminfinesComponent;
  let fixture: ComponentFixture<AdminfinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
