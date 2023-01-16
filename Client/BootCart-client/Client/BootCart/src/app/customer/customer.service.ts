import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaticDetails } from '../helpers/staticDetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  ViewProducts(){
    return this.http.get(`${StaticDetails.API_URL}/customer/viewproducts`);
  }
  ViewOrderHistory(){
    return this.http.get(`${StaticDetails.API_URL}/customer/orderhistory`)
  }
  viewUserProfile(){
    return this.http.get(`${StaticDetails.API_URL}/customer/GetUser`)
  }
  UpdateProfile(data:any){
    return this.http.put(`${StaticDetails.API_URL}/customer/updateprofile`,data)
  }
  ViewCart(){
    return this.http.get(`${StaticDetails.API_URL}/customer/viewcart`)
  }
  AddToCart(productId:any){
    return this.http.get(`${StaticDetails.API_URL}/customer/addtocart/` + productId);
  }
  DeleteFromBag(cid:any){
    return this.http.delete(`${StaticDetails.API_URL}/customer/deletecart/`+ cid)
  }
  AddOrderItem(pid:any){
    return this.http.get(`${StaticDetails.API_URL}/customer/addorderitem/`+ pid)
  }
}
