import {Component, OnInit} from '@angular/core';
import { BrandService } from '../../../shared/services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  brand:{} = {
    name: '',
    company: '',
    phone: '',
    email: ''
  };
  brandId;

  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params => {
      self.brandId = params['brandId'];
      if(self.brandId) {
        this.brandService.getBrand(self.brandId)
          .then(data => {
            self.brand = data;
          })
          .catch(error => {
            this.router.navigate(['500'])
          })
      }else{
        this.router.navigate(['404'])
      }
    })
  }

  update(){
    let self = this;
      this.brandService.update(self.brandId, this.brand)
   }

}
