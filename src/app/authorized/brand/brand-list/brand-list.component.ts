import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../shared/services/brand.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  users;
  activePage;

  constructor(
    private service: BrandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params => {
      self.activePage = params['brandPagin'];
       console.log('active page ', self.activePage)
      if(self.activePage){
        this.service.getBrands(20, self.activePage * 20)
          .then(data => {
            this.users = data;
          })
      } else {
        self.activePage = 1
        this.service.getBrands(20, 0)
          .then(data => {
            this.users = data;
          })
      }
    });

    this.service.getBrands(20, 0).then(data => {
      this.users = data;

    })
  }

  prevPage() {
    return this.activePage - 1
  }

  nextPage() {
    return this.activePage + 1
  }
}
