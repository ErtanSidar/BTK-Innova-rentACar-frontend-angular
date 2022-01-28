import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from './../../services/color.service';
import { BrandListModel } from 'src/app/models/brandListModel';
import { ColorListModel } from 'src/app/models/colorListModel';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SegmentListModel } from 'src/app/models/segmentListModel';
import { SegmentService } from 'src/app/services/segment.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  colors:ColorListModel[]=[]
  brands:BrandListModel[]=[]
  segments:SegmentListModel[]=[]
  carAddForm = new FormGroup({
    name: new FormControl(''),
   
  });
  constructor(private formBuilder: FormBuilder,
              private carService:CarService,
              private colorService:ColorService,
              private brandService:BrandService,
              private segmentService:SegmentService,
              private alertify:AlertifyService
              ) { }

  ngOnInit(): void {
    this.createCarAddForm()
    this.getColors()
    this.getBrands()
    this.getSegments()
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      findexScore: ['', Validators.required],
      minAge: ['', Validators.required],
      segmentId: ['', Validators.required],
      kilometer: ['', Validators.required],
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let createCarModel = Object.assign({}, this.carAddForm.value);
      console.log(createCarModel);
      
      this.carService.add(createCarModel).subscribe(
        (response) => {
          this.alertify.success(response.message)
        },
        (responseError) => {
          // if (responseError.error.Errors.length > 0) {
          //   for (let i = 0; i < responseError.error.Errors.length; i++) {
          //     console.log('hatalı');
          //   }
          // }
          //     
          console.log('hatalı');
        }
      );
    } else {
      console.log('Form Eksik');
    }
  }

  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  getSegments() {
    this.segmentService.getSegments().subscribe(response=>{
      this.segments=response.data
    })
  }

}
