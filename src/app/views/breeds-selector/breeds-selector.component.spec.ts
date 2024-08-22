import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedsSelectorComponent } from './breeds-selector.component';
import { BreedsService } from '../../services/breeds.service';
import { of } from 'rxjs';

describe('BreedsSelectorComponent', () => {
  let component: BreedsSelectorComponent;
  let fixture: ComponentFixture<BreedsSelectorComponent>;
  let mockBreedsService: jasmine.SpyObj<BreedsService>;

  beforeEach(async () => {
    mockBreedsService = jasmine.createSpyObj('BreedsService', ['getBreeds', 'getBreedById', 'getImagesByBreedId']);
    
    await TestBed.configureTestingModule({
      declarations: [ BreedsSelectorComponent ],
      providers: [
        { provide: BreedsService, useValue: mockBreedsService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsSelectorComponent);
    component = fixture.componentInstance;
    mockBreedsService.getBreeds.and.returnValue(of([{ id: '1', name: 'Siamese' }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load breeds on init', () => {
    expect(component.breeds.length).toBeGreaterThan(0);
  });

  it('should select a breed and load its images', () => {
    mockBreedsService.getBreedById.and.returnValue(of({ id: '1', name: 'Siamese', description: 'A breed of cat' }));
    mockBreedsService.getImagesByBreedId.and.returnValue(of([{ url: 'image1.jpg' }]));
    
    component.onBreedChange('1');
    
    expect(component.selectedBreed).toBeTruthy();
    expect(component.images.length).toBeGreaterThan(0);
  });
});
