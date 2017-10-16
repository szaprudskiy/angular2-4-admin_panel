import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerListComponent } from './influencer-list.component';

describe('InfluencerListComponent', () => {
  let component: InfluencerListComponent;
  let fixture: ComponentFixture<InfluencerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
