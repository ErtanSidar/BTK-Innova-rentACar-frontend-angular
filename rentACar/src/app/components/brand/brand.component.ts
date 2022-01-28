import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { BrandListModel } from 'src/app/models/brandListModel';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:BrandListModel[]=[]
  dataLoaded:boolean=false;
  constructor(private brandService:BrandService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.dataLoaded=false;
      this.brands=response.data
      this.dataLoaded=true;
    })
  }

  delete(id:number) {
    this.brandService.delete(id).subscribe(response=>{
      if(response.success) {
        this.getBrands()
        this.alertify.success(response.message+" Başarılı")
      }else {
        this.alertify.error(response.message+" Doğrulama Hatası")
      }
    });
  }

}
