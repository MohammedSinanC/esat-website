import { Routes } from '@angular/router';
import { AboutMain } from '../about-main/about-main';


export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
       import('./about').then(m => m.About), // layout only

    children: [
      {
        path: '',
        component: AboutMain  // OR a landing component
      },
      {
        path: 'founder-msg',
        loadComponent: () =>
          import('../founder-msg/founder-msg').then(m => m.FounderMsg)
      },
      {
        path: 'Story',
        loadComponent: () =>
          import('../our-stories/our-stories').then(m => m.OurStories)
      },

      {
        path: 'experience',
        loadComponent: () =>
          import('../our-experience/our-experience').then(m => m.OurExperience)
      },
      {
        path: 'team',
        loadComponent: () =>
          import('../team/team').then(m => m.Team)
      },
      {
        path: 'environment',
        loadComponent: () =>
          import('../enveronment/enveronment').then(m => m.Enveronment)
      },
       {
        path: 'awards',
        loadComponent: () =>
          import('../awards/awards').then(m => m.Awards)
      },
      {
        path: 'news',
        loadComponent: () =>
          import('../news/news').then(m => m.News)
      },
      {
        path: 'qualitypolicy',
        loadComponent: () =>
          import('../quality-policy/quality-policy').then(m => m.QualityPolicy)
      },
       {
        path: 'privacypolicy',
        loadComponent: () =>
          import('../privacy-policy/privacy-policy').then(m => m.PrivacyPolicy)
      },
      {
        path: 'Terms',
        loadComponent: () =>
          import('../terms/terms').then(m => m.Terms)
      },
       {
        path: 'Philosophy',
        loadComponent: () =>
          import('../our-philosophy/our-philosophy').then(m => m.OurPhilosophy)
      },
      {
        path: 'Social',
        loadComponent: () =>
          import('../social-responsibility/social-responsibility').then(m => m.SocialResponsibility)
      }
    ]
  }
];
