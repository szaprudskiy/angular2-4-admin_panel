import { Component, OnInit } from '@angular/core';
import {InfluencerService} from '../../../shared/services/influencer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-influencer-edit',
  templateUrl: './influencer-edit.component.html',
  styleUrls: ['./influencer-edit.component.scss']
})
export class InfluencerEditComponent implements OnInit {

  influencer:{} = {
    name: '',
    category: '',
    phone: '',
    email: ''
  };
  influencerId;

  constructor(
    private influenceService: InfluencerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params => {
      self.influencerId = params['influencerId'];
      if(self.influencerId) {
        this.influenceService.getInfluencer(self.influencerId)
          .then(data => {
            self.influencer = data;
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
    this.influenceService.update(self.influencerId, this.influencer)
  }

}
