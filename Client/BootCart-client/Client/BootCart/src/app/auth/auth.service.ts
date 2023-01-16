import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticDetails } from '../helpers/staticDetails';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(`${StaticDetails.API_URL}/accounts/login`, data);
  }
  register(data: any){
    return this.http.post(`${StaticDetails.API_URL}/accounts/register`, data);
  }
  registerProductMaster(data: any){
    return this.http.post(`${StaticDetails.API_URL}/accounts/registerproductmaster`, data);
  }
}
