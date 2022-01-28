import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { RentalListModel } from 'src/app/models/rentalListModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  rentals:RentalListModel[]=[]
  rating:number =3
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals()
  }

  getRentals() {
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
    })
  }

}
