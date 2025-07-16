import { WarehouseModuleComponent } from './modules/warehouse-module/warehouse-module.component';
import { NgModule } from '@angular/core';
import { BroilerManagementComponent } from './modules/broiler-management/broiler-management.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './pages/about-component/about-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ModulesComponentComponent } from './pages/modules-component/modules-component.component';
import { ContactComponentComponent } from './pages/contact-component/contact-component.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BreederManagementComponent } from './modules/breeder-management/breeder-management.component';
import { HatcheryModuleComponent } from './modules/hatchery-module/hatchery-module.component';
import { FeedmillManagementComponent } from './modules/feedmill-management/feedmill-management.component';
import { ProcessingManagementComponent } from './modules/processing-management/processing-management.component';
import { VeterinaryModuleComponent } from './modules/veterinary-module/veterinary-module.component';
import { FinanceModuleComponent } from './modules/finance-module/finance-module.component';
import { EggPackingComponent } from './modules/egg-packing/egg-packing.component';
import { LayerManagementComponent } from './modules/layer-management/layer-management.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component:HomeComponentComponent },
  { path: 'about-us', component:AboutComponentComponent},
  { path: 'modules', component: ModulesComponentComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact-us', component: ContactComponentComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'modules/detail/broiler-management', component: BroilerManagementComponent},
  { path: 'modules/detail/breeder-management', component: BreederManagementComponent},
  { path: 'modules/detail/layer-management', component: LayerManagementComponent},
  { path: 'modules/detail/hatchery-management', component: HatcheryModuleComponent},
  { path: 'modules/detail/feedmill-management', component: FeedmillManagementComponent},
  { path: 'modules/detail/processing-management', component: ProcessingManagementComponent},
  { path: 'modules/detail/veterinary-management', component: VeterinaryModuleComponent},
  { path: 'modules/detail/finance-module', component: FinanceModuleComponent},
  { path: 'modules/detail/egg-packing', component: EggPackingComponent},
  { path: 'modules/detail/warehouse-module', component: WarehouseModuleComponent},
];
