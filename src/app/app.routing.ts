import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { BrandsComponent } from './brands/brands.component';
import { InfluenceComponent } from './influence/influence.component';
import {LoginComponent} from './pages/login.component';
import {BrandUsersService, isAuthentication, notAuthentication} from './shared/services/BrandUsers.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  // {
  //   canActivate: [notAuthentication],
  //   path: 'pages/login',
  //   component: LoginComponent
  // },
  {
    path: '',
    // component: LoginComponent,
    canActivate: [isAuthentication],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'influence',
        component: InfluenceComponent
      },
      {
        path: 'brands',
        component: BrandsComponent
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule'
      },
      {
        path: 'plugins',
        loadChildren: './plugins/plugins.module#PluginsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'uikits',
        loadChildren: './uikits/uikits.module#UIKitsModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ isAuthentication, BrandUsersService ]
})
export class AppRoutingModule {}
