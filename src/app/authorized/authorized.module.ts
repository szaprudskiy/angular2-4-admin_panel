import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IsAuthentication } from '../shared/services/admin.service'

// directives
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { AsideToggleDirective } from '../shared/aside.directive';

// libs
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// module
import { UiModule } from '../ui/ui.module';

// components
import { BreadcrumbsComponent } from '../shared/breadcrumb.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { HeaderComponent } from './parts/header/header.component';
import { AsideMenuComponent } from './parts/aside-menu/aside-menu.component';
import { FooterComponent } from './parts/footer/footer.component';
import { InfluencerListComponent } from './influencer/influencer-list/influencer-list.component';
import { BrandInfoComponent } from './brand/brand-info/brand-info.component';
import { BrandEditComponent } from './brand/brand-edit/brand-edit.component';
import { InfluencerInfoComponent } from './influencer/influencer-info/influencer-info.component';
import { InfluencerEditComponent } from './influencer/influencer-edit/influencer-edit.component';
import { BrandComponent } from './brand/brand/brand.component';
import { InfluencerComponent } from './influencer/influencer/influencer.component'


export const authorizedRoutes: Route[] = [
  {
    path: '',
    component: AuthorizedComponent,
    canActivate: [IsAuthentication],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'brands',
        component: BrandComponent,
        children: [
          {
            path: '',
            component: BrandListComponent
          },
          {
            path: 'info/:brandId',
            component: BrandInfoComponent
          },
          {
            path: 'edit/:brandId',
            component: BrandEditComponent
          }
        ]
      },
      {
        path: 'influencers',
        component: InfluencerComponent,
        children: [
          {
            path: '',
            component: InfluencerListComponent
          },
          {
            path: 'info/:influencerId',
            component: InfluencerInfoComponent
          },
          {
            path: 'edit/:influencerId',
            component: InfluencerEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authorizedRoutes),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UiModule
  ],
  declarations: [
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    AuthorizedComponent,
    BrandListComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    AsideMenuComponent,
    FooterComponent,
    InfluencerListComponent,
    BrandInfoComponent,
    BrandEditComponent,
    InfluencerInfoComponent,
    InfluencerEditComponent,
    BrandComponent,
    InfluencerComponent
  ],
  providers:[IsAuthentication]
})
export class AuthorizedModule { }
