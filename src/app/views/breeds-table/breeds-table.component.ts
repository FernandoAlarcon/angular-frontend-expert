import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-breeds-table',
  templateUrl: './breeds-table.component.html',
  styleUrls: ['./breeds-table.component.css']
})
export class BreedsTableComponent implements OnInit {
  breeds: any[] = [];
  filteredBreeds: any[] = [];
  dataFilled: string = '';

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.breedsService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
      this.filteredBreeds = data;
    });
  }

  onSearch(): void {
    this.filteredBreeds = this.breeds.filter(breed => breed.name.toLowerCase().includes(this.dataFilled.toLowerCase()));
  }
}
