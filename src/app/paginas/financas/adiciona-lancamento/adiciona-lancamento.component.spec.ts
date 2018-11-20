import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaLancamentoComponent } from './adiciona-lancamento.component';

describe('AdicionaLancamentoComponent', () => {
  let component: AdicionaLancamentoComponent;
  let fixture: ComponentFixture<AdicionaLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
