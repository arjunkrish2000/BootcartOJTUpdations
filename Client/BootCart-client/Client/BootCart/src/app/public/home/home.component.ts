import { Component, Input } from '@angular/core';
import { PublicService } from '../public.service';

@Component({
  selector: 'public-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() view: 'grid' | 'list' = 'grid';
  products:any
	constructor(private publicService:PublicService) { }

  
	ngOnInit() {
    this.publicService.ViewProducts()
      .subscribe(response => {
        this.products = response;
        console.log(response);
      });
}
}
