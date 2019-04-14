import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    // this.employeeForm = new FormGroup({
    //   fullName: new FormControl(),
    //   email: new FormControl(),

    //   skills: new FormGroup({
    //   skillName: new FormControl(),
    //   experienceInYears: new FormControl(),
    //   proficiency: new FormControl()
    // })
    //   });
    this.employeeForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(20)]],
      Email: [''],
      Adress:[''],
      Phoneno:[''],
      skills: this.fb.group({
        SkillName: [''],
        ExperienceInYears: [''],
        Proficiency: ['beginner']
      }),
    });

  //      // Subscribe to valueChanges observable
  // this.employeeForm.get('FullName').valueChanges.subscribe(
  //   value => {
  //     console.log(JSON.stringify(value));
  //   }
  // );


   // Subscribe to FormGroup valueChanges observable
this.employeeForm.valueChanges.subscribe(
  value => {
    console.log(JSON.stringify(value));
  }
);

  }


  
onLoadDataClick(): void {
  this.employeeForm.setValue({
    FullName: 'Pragim Technologies',
    Email: 'pragim@pragimtech.com',
    Adress:[''],
    Phoneno:[''],
    skills: {
      SkillName: 'C#',
      ExperienceInYears: 5,
      Proficiency: 'beginner'
    }
  });
}

ReloadDataClick(): void {
  this.employeeForm.setValue({
    FullName: '',
    Email: '',
    Adress:'',
    Phoneno:'',
    skills: {
      SkillName: '',
      ExperienceInYears: null,
      Proficiency: ''
    }
  });
}


onSubmit(): void {
  console.log(this.employeeForm.value);
  console.log(this.employeeForm.touched);

  console.log(this.employeeForm.controls.FullName.touched);
  console.log(this.employeeForm.get('FullName'));
}

}
