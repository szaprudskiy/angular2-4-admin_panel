// import { customHttpProvider } from './_helpers/custom-http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HttpModule } from '@angular/http';
// import { customHttpProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import {FullLayoutComponent, isAuthentication} from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';


import { BrandsComponent } from './brands/brands.component';
import { InfluenceComponent } from './influence/influence.component';
import { SystemComponent } from './system/system.component';
import {PagesModule} from './pages/pages.module';
import {BrandUsersService} from './shared/services/BrandUsers.service';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    InfluenceComponent,
    BrandsComponent,
    SystemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    PagesModule
  ],

  providers: [
    BrandUsersService
  //   {
  //   provide: LocationStrategy,
  //    useClass: HashLocationStrategy
  // },
    // customHttpProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
