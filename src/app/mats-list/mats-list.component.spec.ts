import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsListComponent } from './mats-list.component';

describe('MatsListComponent', () => {
  let component: MatsListComponent;
  let fixture: ComponentFixture<MatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
