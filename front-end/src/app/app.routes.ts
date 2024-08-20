import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/list/product-list/product-list.component';
import { ProductFiltersComponent } from './product/filters/product-filters/product-filters.component';
import { ProductDetailComponent } from './product/detail/product-detail/product-detail.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { LoginComponent } from './auth/login/login/login.component';
 // Example component

export const routes: Routes = [

{path:"", component:ProductListComponent},
{path:"product-filters", component:ProductFiltersComponent},
{path:"product/:id", component:ProductDetailComponent,canActivate:[authGuardGuard]},
{ path: 'login', component: LoginComponent },

]
