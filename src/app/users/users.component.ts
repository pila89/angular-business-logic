import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersData: any = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.usersData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteUser(index: any) {
    this.userService.deleteUserById(index).subscribe(
      (data) => {
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
