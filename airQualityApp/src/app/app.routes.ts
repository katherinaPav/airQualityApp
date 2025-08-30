import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { GenerateChart } from '../features/charts/generate-chart/generate-chart';
import { MyCharts } from '../features/charts/my-charts/my-charts';
import { Contact } from '../features/contact/contact';
import { About } from '../features/about/about';
import { authGuard } from '../core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {
                path: 'generate-chart',
                component: GenerateChart
            },
            {
                path: 'my-charts',
                component: MyCharts
            },
            {
                path: 'contact',
                component: Contact
            },
            {
                path: 'about',
                component: About
            },
        ]
    },
    //Wildcard route: Redirect all unknown paths to Home
    {
        path: '**',
        component: Home
    },
];
