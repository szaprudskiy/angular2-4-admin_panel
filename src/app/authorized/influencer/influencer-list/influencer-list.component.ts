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


    this.route.params.subscribe(params => {
      let activePage = params['influencerPagin'];
      console.log('active page ', activePage)
      if (activePage) {
        this.service.getInfluencers(20, activePage * 20)
          .then(data => {
            this.users = data;
          })
      } else {
        activePage = 1
        this.service.getInfluencers(20, 0)
          .then(data => {
            this.users = data;
          })
      }
    });

    this.service.getInfluencers(20, 0).then(data => {
      this.users = data;
    })

  }

  deleteUser(user) {
    this.service.deleteUser(user.id)
      .then(data => {
        this.users = this.users.filter(x => x !== user);
      })

  }

}
