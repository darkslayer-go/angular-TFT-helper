import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TftHelperComponent } from './tft-helper.component';

describe('TftHelperComponent', () => {
  let component: TftHelperComponent;
  let fixture: ComponentFixture<TftHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TftHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TftHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
