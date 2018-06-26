import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnprofileComponent } from './admnprofile.component';

describe('AdmnprofileComponent', () => {
  let component: AdmnprofileComponent;
  let fixture: ComponentFixture<AdmnprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
