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
    this.usersData = this.userService.getAllUsers();
  }
  deleteUser(index: any) {
    this.userService.deleteUserByIndex(index);
  }
}
