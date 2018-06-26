import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnnavbarComponent } from './admnnavbar.component';

describe('AdmnnavbarComponent', () => {
  let component: AdmnnavbarComponent;
  let fixture: ComponentFixture<AdmnnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
