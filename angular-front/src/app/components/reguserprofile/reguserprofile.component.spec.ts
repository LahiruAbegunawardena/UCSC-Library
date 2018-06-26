import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguserprofileComponent } from './reguserprofile.component';

describe('ReguserprofileComponent', () => {
  let component: ReguserprofileComponent;
  let fixture: ComponentFixture<ReguserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReguserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
