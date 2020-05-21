import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatComponent } from './mat.component';

describe('MatComponent', () => {
  let component: MatComponent;
  let fixture: ComponentFixture<MatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
