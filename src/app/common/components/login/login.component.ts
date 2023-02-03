import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onLogin(): void {
    this.submitted = true;
    if (this.loginForm?.invalid) {
      return;
    }
    // call to rest API (using service)
    console.log(this.loginForm?.value);
    const result = this.authService.login(
      this.loginForm?.value.email,
      this.loginForm?.value.password
    );
    if (result) {
      // this.router.navigate(["/users",id]); using if you have a redirection with params
      this.router.navigateByUrl('/users');
    } else {
      alert("Verifiez vos coordonnes d'acces!");
    }
    // reset form
    //this.loginForm?.reset();
  }
}
