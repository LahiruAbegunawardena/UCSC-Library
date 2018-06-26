import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBorrowingsComponent } from './user-borrowings.component';

describe('UserBorrowingsComponent', () => {
  let component: UserBorrowingsComponent;
  let fixture: ComponentFixture<UserBorrowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBorrowingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
