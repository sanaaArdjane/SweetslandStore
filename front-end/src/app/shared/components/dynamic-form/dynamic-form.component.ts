import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [NgIf,FormsModule,ReactiveFormsModule,NgFor,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
@Input() formConfig  // Accepts configuration for form champs
@Output() emitData = new EventEmitter<any>();// Emits form data when submitted
form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }
// modèle de configuration définira les champs du formulaire (type de champ, label, validation)
  buildForm() {
    const group= {};
    this.formConfig.forEach(champ => {
      group[champ.name] = ['', this.getValidators(champ)];
    });
    this.form = this.fb.group(group);
  }

  getValidators(champ: any) {
    const validators = [];
    if (champ['required']) {
      validators.push(Validators.required);
    }
    if (champ['minLength']) {
      validators.push(Validators.minLength(champ['minLength']));
    }
    if (champ['maxLength']) {
      validators.push(Validators.maxLength(champ['maxLength']));
    }
    return validators;
  }


  onSubmit() {
    if (this.form.valid) {
      this.emitData.emit(this.form.value);
    }
  }
}
