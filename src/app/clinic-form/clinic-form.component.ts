import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrls: ['./clinic-form.component.scss']
})
export class ClinicFormComponent implements OnInit {
  loginForm: FormGroup;
  arrayInputs = [{controlerInputName1 : ['a',Validators.required]}, {controlerInputName1: 'b'}];
  constructor(private fb:FormBuilder) { 
    
    this.loginForm =this.fb.group({
      controllerArray: this.fb.array(['', [Validators.required, Validators.maxLength(10)]])
    })  
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    
    });
  }
  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.loginForm.setControl('controllerArray', formArray);
  }

  onSubmit() {
    
    if(this.loginForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }
  ngOnInit() {this.setArrayInputs(this.arrayInputs) 
  }
  addInput() {(this.loginForm.get('controllerArray') as FormArray).push(this.fb.group({controlerInputName1:''})) }

  removeInput(index) { this.loginForm.controls.controllerArray["controls"].splice(index,1) }
}
