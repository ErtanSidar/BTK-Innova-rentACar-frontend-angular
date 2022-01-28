import { AdditionalServiceService } from './../../services/additional-service.service';
import { AdditionalServiceListModel } from './../../models/additionalServiceListModel';
import { RentalService } from './../../services/rental.service';
import { CityService } from './../../services/city.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CityListModel } from 'src/app/models/cityListModel';
import { ActivatedRoute } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  cities:CityListModel[]=[]
  additionalService:AdditionalServiceListModel[]=[]
  carId!: number;
  selectedAdditional: [] = [];
  rentalAddForm = new FormGroup({
    carId: new FormControl(this.carId),
   
  });
  constructor(private formBuilder: FormBuilder,
              private cityService:CityService,
              private route: ActivatedRoute,
              private rentalService:RentalService,
              private alertify:AlertifyService,
              private additionalServiceService:AdditionalServiceService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.carId = params['carId'];
    });
    this.createRentalAddForm()
    this.getCities()
    this.getAdditonalServices()
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      rentDate: ['', Validators.required],
      rentedKilometer: ['', Validators.required],
      customerId: ['', Validators.required],
      carId: [this.carId, Validators.required],
      pickUpRentalCityId: ['', Validators.required],
      returnRentalCityId: ['', Validators.required],
    });
  }

  add() {
    if (this.rentalAddForm.valid) {
      let createCarModel = Object.assign({}, this.rentalAddForm.value);
      console.log(createCarModel);
      
      this.rentalService.add(createCarModel).subscribe((response) => {
        if (response.success) {
          this.alertify.success(response.message +' Başarılı');
        } else {
          this.alertify.error(response.message+ ' Doğrulama hatası');
        }
      });
    } else {
      this.alertify.error('Formunuz eksik'+ ' Dikkat');
    }
  }

  getCities() {
    this.cityService.getCities().subscribe(response=>{
      this.cities=response.data
    })
  }
  getAdditonalServices() {
    this.additionalServiceService.getAdditionalServices().subscribe(response=>{
      this.additionalService=response.data
    })
  }

}
