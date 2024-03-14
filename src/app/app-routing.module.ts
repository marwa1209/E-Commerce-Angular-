import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './Shared/Guards/auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
      {path:'checkout', component: CheckoutComponent},
      { path: 'brands', component: BrandsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
