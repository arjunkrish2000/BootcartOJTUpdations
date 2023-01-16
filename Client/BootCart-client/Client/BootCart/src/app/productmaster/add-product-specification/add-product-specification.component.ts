import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMasterService } from '../product-master.service';

@Component({
  selector: 'app-add-product-specification',
  templateUrl: './add-product-specification.component.html',
  styleUrls: ['./add-product-specification.component.css']
})
export class AddProductSpecificationComponent {
  product:any
  pid:any
  constructor(private route:ActivatedRoute,private pmService:ProductMasterService,private router:Router){}


  addProductSpecification(form:any){
    console.log(form.value);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(id);
    let data = {
      ...form.value,
      pid: id
    }
    console.log(data.pid);
    this.pmService.AddSpecification(data).subscribe({
        next:(responce)=>{
          this.router.navigate(["/add-product"]);
        }
    })
  }

}
