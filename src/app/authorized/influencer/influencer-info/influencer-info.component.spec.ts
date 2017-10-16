import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerInfoComponent } from './influencer-info.component';

describe('InfluencerInfoComponent', () => {
  let component: InfluencerInfoComponent;
  let fixture: ComponentFixture<InfluencerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
