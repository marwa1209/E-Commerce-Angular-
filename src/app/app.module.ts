import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavBlankComponent } from './Components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './Components/nav-auth/nav-auth.component';
import { BlankLayoutComponent } from './Components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './Shared/Pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    NavBlankComponent,
    NavAuthComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    SearchPipe,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
