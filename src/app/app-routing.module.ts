import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DemoComponent } from './demo/demo.component';
import { Error404Component } from './error404/error404.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './products/views/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

import {AdminGuardGuard} from './core/guards/AdminGuard/admin-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'contacts',
        canActivate: [AdminGuardGuard],
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
