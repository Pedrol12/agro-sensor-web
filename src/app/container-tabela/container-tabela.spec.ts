import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerTabela } from './container-tabela';

describe('ContainerTabela', () => {
  let component: ContainerTabela;
  let fixture: ComponentFixture<ContainerTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerTabela],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
