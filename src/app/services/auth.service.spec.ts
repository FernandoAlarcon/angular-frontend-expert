import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should login and return user data', () => {
    const dummyUser = { username: 'test', token: 'abc123' };
    service.login('test', 'password').subscribe(user => {
      expect(user.username).toBe('test');
    });

    const request = httpMock.expectOne(`${baseUrl}/login?username=test&password=password`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUser);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
