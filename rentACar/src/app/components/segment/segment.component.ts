import { Component, OnInit } from '@angular/core';
import { SegmentListModel } from 'src/app/models/segmentListModel';
import { SegmentService } from 'src/app/services/segment.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  segments:SegmentListModel[]=[]
  constructor(private segmentService:SegmentService) { }

  ngOnInit(): void {
    this.getSegments()
  }

  getSegments() {
    this.segmentService.getSegments().subscribe(response=>{
      console.log(response.data)
      this.segments=response.data
    })
  }

}
