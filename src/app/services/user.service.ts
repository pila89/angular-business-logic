import { JSDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any = [
    // { fullName: 'salim', email: 'salim@gmail.com', password: '12345678' },
    // { fullName: 'houssem', email: 'houssem@gmail.com', password: '12345678' },
    // { fullName: 'hatem', email: 'houssem@gmail.com', password: '12345678' },
  ];
  constructor() {}

  getAllUsers() {
    if (localStorage.getItem('salim') === null) {
      return this.users;
    } else {
      const xxx: any = localStorage.getItem('salim');
      console.log(JSON.parse(xxx));
      this.users = JSON.parse(xxx);
      return this.users;
    }
  }

  getUserByIndex(index: number) {
    return this.users[index];
  }

  updateUserByIndex(index: number, userUpdatet: any) {
    this.users.splice(index, 1, userUpdatet);
  }

  deleteUserByIndex(index: number) {
    this.users.splice(index, 1);
  }

  addUser(userData: any) {
    if (localStorage.getItem('salim') === null) {
      this.users.push(userData);
      console.log(this.users);
      localStorage.setItem('salim', JSON.stringify(this.users));
    } else {
      this.users.push(userData);
      localStorage.setItem('salim', JSON.stringify(this.users));
    }
  }
}
