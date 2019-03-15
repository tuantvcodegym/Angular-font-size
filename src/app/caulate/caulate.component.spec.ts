import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaulateComponent } from './caulate.component';

describe('CaulateComponent', () => {
  let component: CaulateComponent;
  let fixture: ComponentFixture<CaulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
