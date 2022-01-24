import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitClicked: boolean = false;

  constructor(public tableSrvc: TableDataService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],



      }
    )

  }

  login() {
    this.isSubmitClicked = true;
    if (this.loginForm.valid) {


      this.tableSrvc.getLoginData().subscribe(res => {
        const user = res.find((a: any) => {
          localStorage.setItem('user', a);
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;

        });
        if (user) {

          this.loginForm.reset();
          this.router.navigate(['sidenav']);
          alert("login is success");
        }
        else {
          alert("login Failed !! Please check the email and password");
        }
      },
        err => {
          alert("something went wrong");
        })
    }
    else {
      alert("Please fill the required fields");
    }
  }
}
