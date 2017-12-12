import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../shared/services/brand.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  users;
  activePage;
  userId;
  countbrand;
  countintpage;

  constructor(
    private service: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activePage = params['brandPagin'];
       console.log('active page ', this.activePage)
      if(this.activePage){
        this.service.getBrands(20, this.activePage * 20)
          .then(data => {
            this.users = data;
          })
      } else {
        this.activePage = 1
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


  getUrl(page) {
    return (page > 1) ? 'brands/' + page : 'brands'
  }

  prevPage() {
     this.activePage = this.activePage - 1;
     this.router.navigate(['/brands/' + this.activePage])
  }


  nextPage() {
     this.activePage = this.activePage + 1;
     this.router.navigate(['/brands/' + this.activePage])
  }


  deleteUser(user) {
      this.service.deleteUser(user.id)
        .then(data => {
          this.users = this.users.filter(x => x !== user);
        })

  }


}
