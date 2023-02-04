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
    this.authService.login(this.loginForm?.value).subscribe(
      (data:any) => {
        localStorage.setItem("token",data.token)
        this.router.navigateByUrl('/users');
      },
      (error) => {
        console.log(error);
        alert("Verifiez vos coordonnes d'acces!");
      }
    );
  }
}
