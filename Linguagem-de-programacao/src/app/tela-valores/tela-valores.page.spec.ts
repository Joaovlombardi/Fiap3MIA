import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaValoresPage } from './tela-valores.page';

describe('TelaValoresPage', () => {
  let component: TelaValoresPage;
  let fixture: ComponentFixture<TelaValoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaValoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
