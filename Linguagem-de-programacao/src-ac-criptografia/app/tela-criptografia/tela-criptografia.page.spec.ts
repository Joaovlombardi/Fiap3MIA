import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaCriptografiaPage } from './tela-criptografia.page';

describe('TelaCriptografiaPage', () => {
  let component: TelaCriptografiaPage;
  let fixture: ComponentFixture<TelaCriptografiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCriptografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
