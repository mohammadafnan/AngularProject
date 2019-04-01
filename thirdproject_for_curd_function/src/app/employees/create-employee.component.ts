import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

  }

   saveEmployee(empForm: NgForm) : void{

    console.log(empForm.value);
   }
}
