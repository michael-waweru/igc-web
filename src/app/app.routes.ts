import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './pages/about-component/about-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ModulesComponentComponent } from './pages/modules-component/modules-component.component';
import { ContactComponentComponent } from './pages/contact-component/contact-component.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  { path: '', component:HomeComponentComponent },
  { path: 'about-us', component:AboutComponentComponent},
  { path: 'modules', component: ModulesComponentComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact-us', component: ContactComponentComponent},
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     scrollPositionRestoration: 'top',
//   })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }