import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerEditComponent } from './influencer-edit.component';

describe('InfluencerEditComponent', () => {
  let component: InfluencerEditComponent;
  let fixture: ComponentFixture<InfluencerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
