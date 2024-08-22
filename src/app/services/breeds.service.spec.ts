import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BreedsService } from './breeds.service';

describe('BreedsService', () => {
  let service: BreedsService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BreedsService]
    });
    service = TestBed.inject(BreedsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve breeds from API via GET', () => {
    const dummyBreeds = [{ id: '1', name: 'Siamese' }];
    service.getBreeds().subscribe(breeds => {
      expect(breeds.length).toBe(1);
      expect(breeds).toEqual(dummyBreeds);
    });

    const request = httpMock.expectOne(`${baseUrl}/breeds`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyBreeds);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
