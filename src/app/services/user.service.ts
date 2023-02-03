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
    const data: any = localStorage.getItem('users');
    if (data !== null) {
      this.users = JSON.parse(data);
    }
    return this.users;
  }

  getUserByIndex(index: number) {
    return this.users[index];
  }

  updateUserByIndex(index: number, userUpdatet: any) {
    this.users.splice(index, 1, userUpdatet);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUserByIndex(index: number) {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addUser(userData: any) {
    this.users.push(userData);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
