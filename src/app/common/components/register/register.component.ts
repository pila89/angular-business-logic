import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public isSubmitted = false;
  public registerForm?: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerrForm();
  }
  registerrForm() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onRegister(): void {
    this.isSubmitted = true;
    if (this.registerForm?.invalid) {
      return;
    }
    const data = this.registerForm?.value;
    delete data.confirmPassword;
    console.log(data);
    this.authService.register(data);
    // reset form
    this.registerForm?.reset();
    this.isSubmitted = false;
    this.router.navigateByUrl('/auth/login'); // redirection without parameters
  }
}
