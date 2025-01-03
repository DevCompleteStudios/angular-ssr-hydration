import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact-page.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page.component')
    },
    {
        path: 'pokemons',
        loadComponent: () => import('./pages/pokemons/pokemons-page.component')
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
