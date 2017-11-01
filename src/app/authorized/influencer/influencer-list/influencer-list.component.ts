import { Component, OnInit } from '@angular/core';
import { InfluencerService } from '../../../shared/services/influencer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {
  users;
  activePage;

  constructor(
    private service: InfluencerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params => {
      self.activePage = params['influencerPagin'];
      console.log('active page ', self.activePage)
      if(self.activePage){
        this.service.getInfluencers(20, self.activePage * 20)
          .then(data => {
            this.users = data;
          })
      } else {
        self.activePage = 1
        this.service.getInfluencers(20, 0)
          .then(data => {
            this.users = data;
          })
      }
    });

    this.service.getInfluencers(10, 0).then(data => {
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
