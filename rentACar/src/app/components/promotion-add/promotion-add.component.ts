import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion-add',
  templateUrl: './promotion-add.component.html',
  styleUrls: ['./promotion-add.component.css']
})
export class PromotionAddComponent implements OnInit {
  promotionAddForm = new FormGroup({
   
  });
  constructor(private formBuilder: FormBuilder,
              private promotionService:PromotionService,
              private alertify:AlertifyService
              ) { }

  ngOnInit(): void {
    this.createPromotionAddForm()
  }

  createPromotionAddForm() {
    this.promotionAddForm = this.formBuilder.group({
      promotionCode: ['', Validators.required],
      discountAmount: ['', Validators.required],
      startedDate: ['', Validators.required],
      endedDate: ['', Validators.required],
    });
  }

  add() {
    if (this.promotionAddForm.valid) {
      let createPromotionModel = Object.assign({}, this.promotionAddForm.value);
      console.log(createPromotionModel);
      
      this.promotionService.add(createPromotionModel).subscribe((response) => {
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
