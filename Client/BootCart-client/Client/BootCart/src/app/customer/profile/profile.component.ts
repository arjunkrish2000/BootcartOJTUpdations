import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  data:any
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };
	constructor(private customerService:CustomerService) { }

      ngOnInit(){
        this.data = this.customerService.viewUserProfile().subscribe((res:any)=>{
          this.data = res.data;
          this.user.firstName = this.data.firstName;
          this.user.lastName = this.data.lastName;
          this.user.email = this.data.email;
          this.user.phoneNumber = this.data.phoneNumber;    
        })
      }
  update(form:any)
  {
    console.log(form.value);
    this.customerService.UpdateProfile(form.value).subscribe(res =>
      {
        console.log(res);
      });
  }
}


