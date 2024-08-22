import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-breeds-selector',
  templateUrl: './breeds-selector.component.html',
  styleUrls: ['./breeds-selector.component.css']
})
export class BreedsSelectorComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any;
  images: any[] = [];
  breedId : any = '';

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.breedsService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
    });
  }

  onBreedChange(value: any): void {
 
    let dataSelect = value.target.value; 

    this.breedsService.getBreedById(dataSelect).subscribe((data: any) => {
      this.selectedBreed = data;
      this.breedsService.getImagesByBreedId(dataSelect).subscribe((images: any) => {
        this.images = images;
      });
    });
  }// onBreedChange

}
