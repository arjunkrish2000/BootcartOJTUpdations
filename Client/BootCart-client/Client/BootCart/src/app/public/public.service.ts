import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaticDetails } from '../helpers/staticDetails';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http:HttpClient) { }

  ViewProducts(){
    return this.http.get(`${StaticDetails.API_URL}/customer/viewproducts`);
  }
}
