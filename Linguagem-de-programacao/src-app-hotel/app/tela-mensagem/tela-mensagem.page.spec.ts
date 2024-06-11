import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaMensagemPage } from './tela-mensagem.page';

describe('TelaMensagemPage', () => {
  let component: TelaMensagemPage;
  let fixture: ComponentFixture<TelaMensagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
