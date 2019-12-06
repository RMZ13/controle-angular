import { Component, OnInit } from '@angular/core';
import { SalonService } from '../salon.service';
import { Salon } from '../salon';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.css']
})
export class SalonsComponent implements OnInit {
  Salons: Salon[] = [];

  constructor(private salonService: SalonService) { }

  ngOnInit() {
    this.displaySideBarChannels();
  }

  private displaySideBarChannels() {
    this.salonService.findSalons().subscribe(
      (Salons: Salon[]) => this.Salons = Salons
    );
  }
}