import { PromotionAddComponent } from './components/promotion-add/promotion-add.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { SegmentAddComponent } from './components/segment-add/segment-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"brand/add" ,component:BrandAddComponent},
  {path:"color/add" ,component:ColorAddComponent},
  {path:"car/add" ,component:CarAddComponent},
  {path:"car" ,component:CarComponent},
  {path:"home" ,component:HomePageComponent},
  {path:"segment/add" ,component:SegmentAddComponent},
  {path:"promotion/add" ,component:PromotionAddComponent},
  {path:"car/:carId", component:CarDetailComponent},
  {path:"rentals/getrentals", component:RentalComponent},
  {path:"rentals/getrentals/payment/:rentalId", component:PaymentComponent},
  {path:"car/rental/:carId", component:RentalAddComponent},
  {path:"",component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
