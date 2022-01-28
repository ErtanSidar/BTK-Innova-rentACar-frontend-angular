import { BrowserModule } from '@angular/platform-browser';
import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { NavComponent } from './components/nav/nav.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { SegmentComponent } from './components/segment/segment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CityComponent } from './components/city/city.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SegmentAddComponent } from './components/segment-add/segment-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import { AlertifyService } from './services/alertify.service';
import { FooterComponent } from './components/footer/footer.component';
import { AdditionalServiceComponent } from './components/additional-service/additional-service.component';
import {PickListModule} from 'primeng/picklist';
import {MultiSelectModule} from 'primeng/multiselect';
import { PromotionAddComponent } from './components/promotion-add/promotion-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    BrandAddComponent,
    ColorAddComponent,
    NavComponent,
    CarAddComponent,
    SegmentComponent,
    RentalAddComponent,
    CityComponent,
    SegmentAddComponent,
    RentalComponent,
    PromotionComponent,
    PaymentComponent,
    HomePageComponent,
    FooterComponent,
    AdditionalServiceComponent,
    PromotionAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    MenubarModule,
    CarouselModule,
    PickListModule,
    MultiSelectModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
