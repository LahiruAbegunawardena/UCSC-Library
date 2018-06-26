import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguserfooterComponent } from './reguserfooter.component';

describe('ReguserfooterComponent', () => {
  let component: ReguserfooterComponent;
  let fixture: ComponentFixture<ReguserfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReguserfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguserfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
