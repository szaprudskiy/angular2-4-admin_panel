import { Component, OnInit } from '@angular/core';
import { InfluencerService } from '../../../shared/services/influencer.service';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.scss']
})
export class InfluencerListComponent implements OnInit {
  users;

  constructor(
    private service: InfluencerService
  ) { }

  ngOnInit() {
    this.service.getInfluencers(10, 0).then(data => {
      this.users = data;
    })
  }

}
