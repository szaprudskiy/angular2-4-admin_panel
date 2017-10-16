import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../shared/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  users;
  constructor(
    private service: BrandService
  ) { }

  ngOnInit() {
    this.service.getBrands(10, 0).then(data => {
      this.users = data;
    })
  }

}
