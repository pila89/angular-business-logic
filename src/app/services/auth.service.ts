import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpClient:HttpClient) {}

  login(data :any) {
    return this.httpClient.post(`${environment.baseUrl}/auth/login`, data);
  }
  register(data: any) {
    return this.httpClient.post(`${environment.baseUrl}/auth/register`, data);
  }
}
