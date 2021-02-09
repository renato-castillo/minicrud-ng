import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaListarComponent } from './venta-listar.component';

describe('VentaListarComponent', () => {
  let component: VentaListarComponent;
  let fixture: ComponentFixture<VentaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
