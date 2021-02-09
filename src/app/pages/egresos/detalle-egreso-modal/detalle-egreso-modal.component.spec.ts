import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEgresoModalComponent } from './detalle-egreso-modal.component';

describe('DetalleEgresoModalComponent', () => {
  let component: DetalleEgresoModalComponent;
  let fixture: ComponentFixture<DetalleEgresoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEgresoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEgresoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
