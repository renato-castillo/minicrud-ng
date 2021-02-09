import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFormComponent } from './venta-form.component';

describe('VentaFormComponent', () => {
  let component: VentaFormComponent;
  let fixture: ComponentFixture<VentaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
