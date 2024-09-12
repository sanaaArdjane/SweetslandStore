import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormComponent, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;

    // Mock formConfig to simulate input
    component.formConfig = [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'age', label: 'Age', type: 'number', min: 1, max: 100 },
    ];

    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate the form with the correct fields', () => {
    expect(component.form.contains('firstName')).toBeTrue();
    expect(component.form.contains('age')).toBeTrue();
  });

  it('should validate required fields correctly', () => {
    const firstNameControl = component.form.get('firstName');
    firstNameControl.setValue('');
    expect(firstNameControl.valid).toBeFalse();
    expect(firstNameControl.errors['required']).toBeTruthy();
  });

  it('should emit form data on submit', () => {
    spyOn(component.emitData, 'emit');

    component.form.get('firstName').setValue('Sanaa');
    component.onSubmit();

    expect(component.emitData.emit).toHaveBeenCalledWith({ firstName: 'Sanaa', age: '' });
  });
});
