import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Department } from '../models/Department';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  previewPhoto = false; 

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  ngOnInit() {

  }

  saveEmployee(empForm: NgForm): void {

    console.log(empForm.value);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  } 

  onClick(){
    alert("successfully safe")
  }
}
