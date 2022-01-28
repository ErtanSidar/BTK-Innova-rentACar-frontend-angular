import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  

  brandAddForm = new FormGroup({
    name: new FormControl(''),
   
  });
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private alertify:AlertifyService
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let createBrandModel = Object.assign({}, this.brandAddForm.value);
      console.log(createBrandModel);
      
      this.brandService.add(createBrandModel).subscribe((response) => {
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
}