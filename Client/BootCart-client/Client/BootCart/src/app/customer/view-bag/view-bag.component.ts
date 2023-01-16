import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-bag',
  templateUrl: './view-bag.component.html',
  styleUrls: ['./view-bag.component.css']
})
export class ViewBagComponent {

  pid:Array<Number>=[];
  cart:any
  constructor(private route:ActivatedRoute,private customerService:CustomerService,private router:Router){}
  
  removeFromBag(cid:any){
    this.customerService.DeleteFromBag(cid)
    .subscribe(responce => {
      location.reload();
    })
  }

  placeOrder(){
    
    for (let val of this.cart) { 
      this.pid = val.productId
      
    }
    this.customerService.AddOrderItem(this.cart.productId)
    .subscribe({
      next:(responce)=>{
        console.log(responce);
      }
  })
  
  }
  

  ngOnInit(){
    
    this.customerService.ViewCart()
      .subscribe(response => {
        this.cart = response;
        console.log(response);
        this.router.navigate(['view-bag'])
      });
  }
  
}
