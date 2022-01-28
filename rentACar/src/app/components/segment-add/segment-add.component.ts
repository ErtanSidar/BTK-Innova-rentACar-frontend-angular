import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SegmentService } from 'src/app/services/segment.service';

@Component({
  selector: 'app-segment-add',
  templateUrl: './segment-add.component.html',
  styleUrls: ['./segment-add.component.css']
})
export class SegmentAddComponent implements OnInit {
  segmentAddForm = new FormGroup({
    
  });
  constructor(private formBuilder: FormBuilder,
              private segmentService:SegmentService,
              private alertify:AlertifyService
              ) { }

  ngOnInit(): void {
    this.createSegmentAddForm()
  }

  createSegmentAddForm() {
    this.segmentAddForm = this.formBuilder.group({
      segmentName: ['', Validators.required],
    });
  }

  add() {
    if (this.segmentAddForm.valid) {
      let createSegmentModel = Object.assign({}, this.segmentAddForm.value);
      console.log(createSegmentModel);
      
      this.segmentService.add(createSegmentModel).subscribe((response) => {
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
