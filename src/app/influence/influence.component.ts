import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfluenceService } from '../shared/services/influence.service';
import { Influence } from '../shared/models/influence.model';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/combineLatest';


@Component({
  selector: 'app-influence',
  templateUrl: './influence.component.html',
  styleUrls: ['./influence.component.scss'],
  providers: [InfluenceService]
})
export class InfluenceComponent {

  // subscription: Subscription;

  //   constructor (private influenceService: InfluenceService) {}

  //   ngOnInit() {
  //     this.subscription = Observable.combineLatest (
  //       this.influenceService.getInfluence(),
  //     ).subscribe((data) => {
  //       console.log(data);
  //     });
  //   }
  //   ngOnDestroy() {
  //     this.subscription.unsubscribe();
  //   }

}
