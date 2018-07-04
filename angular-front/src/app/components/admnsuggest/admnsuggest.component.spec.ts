import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnsuggestComponent } from './admnsuggest.component';

describe('AdmnsuggestComponent', () => {
  let component: AdmnsuggestComponent;
  let fixture: ComponentFixture<AdmnsuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnsuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnsuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
