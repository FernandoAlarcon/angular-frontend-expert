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

  onBreedChange(): void {



    this.breedsService.getBreedById(this.breedId).subscribe((data: any) => {
      this.selectedBreed = data;
      this.breedsService.getImagesByBreedId(this.breedId).subscribe((images: any) => {
        this.images = images;
      });
    });
  }
}
