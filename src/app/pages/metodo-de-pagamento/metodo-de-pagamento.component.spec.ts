import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoDePagamentoComponent } from './metodo-de-pagamento.component';

describe('MetodoDePagamentoComponent', () => {
  let component: MetodoDePagamentoComponent;
  let fixture: ComponentFixture<MetodoDePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodoDePagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
