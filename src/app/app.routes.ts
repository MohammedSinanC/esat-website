import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SoftwareMain } from './Software/software-main/software-main';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'software',
  //   component: SoftwareMain,
  // },

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },

  {
    path: 'about',
    loadChildren: () => import('./about-section/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },

  {
    path: 'software',
    loadChildren: () =>
      import('./Software/product/sw-common/software.routes').then((m) => m.Software_ROUTES),
  },
];
