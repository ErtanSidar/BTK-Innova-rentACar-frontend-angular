import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { ColorListModel } from 'src/app/models/colorListModel';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:ColorListModel[]=[]
  constructor(private colorService:ColorService,private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  delete(id:number) {
    this.colorService.delete(id).subscribe(response=>{
      if(response.success) {
        this.getColors()
        this.alertify.success(response.message+" Başarılı")
      }else {
        this.alertify.error(response.message+" Doğrulama Hatası")
      }
    });
  }

}
