import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientePaginadoComponent } from './paciente-paginado.component';

describe('PacientePaginadoComponent', () => {
  let component: PacientePaginadoComponent;
  let fixture: ComponentFixture<PacientePaginadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientePaginadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientePaginadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
