import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguserheaderComponent } from './reguserheader.component';

describe('ReguserheaderComponent', () => {
  let component: ReguserheaderComponent;
  let fixture: ComponentFixture<ReguserheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReguserheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguserheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
