import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent]
    });
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
