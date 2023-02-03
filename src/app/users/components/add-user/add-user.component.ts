import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public isSubmitted = false;
  public userForm?: FormGroup;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.createUserForm();
  }
  createUserForm() {
    this.userForm = new FormGroup({
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
  onCreateUser(): void {
    this.isSubmitted = true;
    if (this.userForm?.invalid) {
      return;
    }
    const data = this.userForm?.value;
    delete data.confirmPassword;
    // console.log(data);
    this.userService.addUser(data);
    // // reset form
    this.userForm?.reset();
    this.isSubmitted = false;
    this.router.navigateByUrl('/users'); // redirection without parameters
  }
}
