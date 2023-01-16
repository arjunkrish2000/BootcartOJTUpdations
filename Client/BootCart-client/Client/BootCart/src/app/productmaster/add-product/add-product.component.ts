import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ProductMasterService } from '../product-master.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productMaster:any
  stock:any
  constructor(private pmService:ProductMasterService, private router:Router,private cookieService:CookieService) { }

	ngOnInit() {
    this.pmService.ViewStock()
      .subscribe(response => {
        this.stock = response;
        console.log(response);
      });
  }

  addProduct(form:any){
    console.log(form.value);
    
    this.pmService.AddProduct(form.value).subscribe({
        next:(responce)=>{
          console.log(responce);
          location.reload();
        }
    })
  }


  
}
