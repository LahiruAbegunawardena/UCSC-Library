import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebrrwsComponent } from './managebrrws.component';

describe('ManagebrrwsComponent', () => {
  let component: ManagebrrwsComponent;
  let fixture: ComponentFixture<ManagebrrwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebrrwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebrrwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
