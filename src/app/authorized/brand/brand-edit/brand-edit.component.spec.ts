import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandEditComponent } from './brand-edit.component';

describe('BrandEditComponent', () => {
  let component: BrandEditComponent;
  let fixture: ComponentFixture<BrandEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
