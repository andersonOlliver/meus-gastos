import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancasComponent } from './financas.component';

describe('FinancasComponent', () => {
  let component: FinancasComponent;
  let fixture: ComponentFixture<FinancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
