import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinesComponent } from './user-fines.component';

describe('UserFinesComponent', () => {
  let component: UserFinesComponent;
  let fixture: ComponentFixture<UserFinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
