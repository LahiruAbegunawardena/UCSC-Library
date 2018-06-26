import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnbooksComponent } from './admnbooks.component';

describe('AdmnbooksComponent', () => {
  let component: AdmnbooksComponent;
  let fixture: ComponentFixture<AdmnbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
