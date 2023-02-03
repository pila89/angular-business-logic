import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { fullName: 'salim', email: 'salim@gmail.com', password: '12345678' },
    { fullName: 'houssem', email: 'houssem@gmail.com', password: '12345678' },
    { fullName: 'hatem', email: 'houssem@gmail.com', password: '12345678' },
  ];
  constructor() {}

  login(email: string, password: string): boolean {
    const found = this.users.find(
      (user) => user.email == email && user.password == password
    );
    return found !== undefined;
    // if (found === undefined) {
    //   return false;
    // } else {
    //   return true;
    // }
  }
  register(data: any) {
    this.users.push(data);
    console.log(this.users);
  }
}
