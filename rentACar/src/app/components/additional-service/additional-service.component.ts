import { AdditionalServiceService } from './../../services/additional-service.service';
import { AdditionalServiceListModel } from './../../models/additionalServiceListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.css']
})
export class AdditionalServiceComponent implements OnInit {
  sourceAdditionalServices:AdditionalServiceListModel[]=[]
  targetAdditionalServices!: AdditionalServiceListModel[];
  constructor(private additionalServiceService:AdditionalServiceService) { }

  ngOnInit(): void {
    this.getAdditonalServices()
  }
  getAdditonalServices() {
    this.additionalServiceService.getAdditionalServices().subscribe(response=>{
      this.sourceAdditionalServices=response.data
      this.targetAdditionalServices=[]
    })
  }
}
