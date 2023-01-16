import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaticDetails } from '../helpers/staticDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  GetCustomers(){
    return this.http.get(`${StaticDetails.API_URL}/admin/customerview`);
  }
  GetProductMasters(){
    return this.http.get(`${StaticDetails.API_URL}/admin/productmasterview`);
  }
 
  GetProducts(){
    return this.http.get(`${StaticDetails.API_URL}/admin/ProductView`);
  }
}
