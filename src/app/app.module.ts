import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app.routing';

// providers
import { customHttpProvider } from './_helpers/index';

// Services
import { AdminService, IsAuthentication, NotAuthentication } from './shared/services/admin.service';
import { BrandService } from './shared/services/brand.service';
import { InfluencerService } from './shared/services/influencer.service';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './errors/page-forbidden/page-forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    SimpleNotificationsModule.forRoot()
  ],

  providers: [
    customHttpProvider,
    AdminService,
    IsAuthentication,
    NotAuthentication,
    BrandService,
    InfluencerService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
