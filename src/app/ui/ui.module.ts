import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  declarations: [
    TestComponent,
  ],
  exports:[
    TestComponent,
  ]
})
export class UiModule { }
