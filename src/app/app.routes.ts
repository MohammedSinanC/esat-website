import { Routes } from '@angular/router';
import { HomeComponent } from './widget/pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () => import('../app/widget/pages/about/about-module').then((m) => m.AboutModule),
  },
  {
    path: 'software',
    loadChildren: () =>
      import('../app/widget/pages/software/software-module').then((m) => m.SoftwareModule),
  },
  
];

// {
//   path: 'home',
//   redirectTo: '',
//   pathMatch: 'full',
// },

// {
//   path: 'about',
//   loadChildren: () => import('./about-section/about/about.routes').then((m) => m.ABOUT_ROUTES),
// },

// {
//   path: 'software',
//   loadChildren: () =>
//     import('./Software/product/sw-common/software.routes').then((m) => m.Software_ROUTES),
// },
