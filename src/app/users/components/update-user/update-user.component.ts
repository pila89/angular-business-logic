import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  public isSubmitted = false;
  public userForm?: FormGroup;
  private id: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //1.Recuperation du parametre (index)=>path params
    //first way : using functionnal programming => reactive /declarative programming(observable)

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // console.log(paramMap);
      // console.log(paramMap.get('index'));
      this.id = paramMap.get('id');
    });
    //second way : using procedural programming => imperatif programming
    // console.log(this.activatedRoute.snapshot.params);
    this.id = this.activatedRoute.snapshot.params['id'];

    //2.creation d´un formulaire
    this.createUserForm();
    //3.Recuperation des donnes de user ayant l´id en question
    this.userService.getUserById(this.id).subscribe(
      (data: any) => {
        //4.Afficher les donnees dans le formulaire
        this.userForm?.get('confirmPassword')?.setValue(data.password);
        this.userForm?.patchValue(data);
      },
      (error) => {
        console.log(error);
      }
    );
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
  onUpdateUser(): void {
    this.isSubmitted = true;
    if (this.userForm?.invalid) {
      return;
    }
    const data = this.userForm?.value;
    delete data.confirmPassword;
    //  console.log(data);
    this.userService.updateUserById(this.id, data).subscribe(
      (data) => {
        // // reset form
        this.userForm?.reset();
        this.isSubmitted = false;
        this.router.navigateByUrl('/users'); // redirection without parameters
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
