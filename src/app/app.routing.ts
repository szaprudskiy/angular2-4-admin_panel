import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthentication } from './shared/services/admin.service'
import { AuthorizedModule, authorizedRoutes } from './authorized/authorized.module';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './errors/page-forbidden/page-forbidden.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthentication]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '500',
    component: PageForbiddenComponent
  },
  ...authorizedRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthorizedModule
  ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule {}
