import { Routes } from '@angular/router';
import { AboutComponentComponent } from './pages/about-component/about-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ModulesComponentComponent } from './pages/modules-component/modules-component.component';
import { ContactComponentComponent } from './pages/contact-component/contact-component.component';

export const routes: Routes = [
  { path: '', component:HomeComponentComponent },
  { path: 'about-us', component:AboutComponentComponent},
  { path: 'modules', component: ModulesComponentComponent},
  { path: 'contact-us', component: ContactComponentComponent},
];
