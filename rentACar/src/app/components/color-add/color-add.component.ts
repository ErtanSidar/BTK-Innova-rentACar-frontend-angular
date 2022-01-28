import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm = new FormGroup({
   
  });
  constructor(private formBuilder: FormBuilder,
              private colorService:ColorService,
              private alertify:AlertifyService
              ) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let createColorModel = Object.assign({}, this.colorAddForm.value);
      console.log(createColorModel);
      
      this.colorService.add(createColorModel).subscribe((response) => {
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
