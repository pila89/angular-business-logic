import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get(`${environment.baseUrl}/users`);
  }

  getUserById(id: number) {
    return this.httpClient.get(`${environment.baseUrl}/users/${id}`);
  }

  updateUserById(id: number, userUpdated: any) {
    return this.httpClient.put(
      `${environment.baseUrl}/users/${id}`,
      userUpdated
    );
  }

  deleteUserById(id: number) {
    return this.httpClient.delete(`${environment.baseUrl}/users/${id}`);
  }

  addUser(userData: any){
    return this.httpClient.post(`${environment.baseUrl}/users`, userData);
  }
}
