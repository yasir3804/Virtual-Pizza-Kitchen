import { Routes } from '@angular/router';
import path from 'node:path';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sign-up', pathMatch: 'full' }, 
    {path: "sign-up",
    component:SignUpComponent, 
    },

];

