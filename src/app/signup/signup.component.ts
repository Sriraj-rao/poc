import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  constructor(public tableSrvc:TableDataService ,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm()
  {
    this.signupForm = this.formBuilder.group(
      {
        fullName:[''],
        password:[''],
        email:[''],
        mobile:[''],
 
      }
    )
 
  }

signup()
{
  this.tableSrvc.signup( this.signupForm.value).subscribe(res=>
    {
      console.log(res);
      alert("Registered successfully");
      this.router.navigate(['/login']);
    },
    err=>
    {
      alert("something went wrong");
    })
}
}
