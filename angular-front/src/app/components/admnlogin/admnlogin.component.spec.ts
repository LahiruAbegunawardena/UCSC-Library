import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnloginComponent } from './admnlogin.component';

describe('AdmnloginComponent', () => {
  let component: AdmnloginComponent;
  let fixture: ComponentFixture<AdmnloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
