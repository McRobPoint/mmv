import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'start',
    loadComponent: () => import('./pages/start/start.component').then(m => m.StartComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
  }
];
