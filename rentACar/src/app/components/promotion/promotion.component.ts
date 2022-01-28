import { PromotionListModel } from './../../models/promotionListModel';
import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promotions:PromotionListModel[]=[]
  constructor(private promotionService:PromotionService) { }

  ngOnInit(): void {
    this.getPromotions()
  }

  getPromotions() {
    this.promotionService.getPromotions().subscribe(response=>{
      this.promotions=response.data
    })
  }

}
