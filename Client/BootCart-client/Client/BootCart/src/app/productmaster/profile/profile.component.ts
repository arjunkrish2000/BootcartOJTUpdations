import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductMasterService } from '../product-master.service';

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
	constructor(private productMasterService:ProductMasterService, private router:Router) { }

      ngOnInit(){
        this.data = this.productMasterService.viewUserProfile().subscribe((res:any)=>{
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
    this.productMasterService.UpdateProfile(form.value).subscribe(res =>
      {
        this.router.navigate(['/productmaster']);

        console.log(res);
      });
  }
}
