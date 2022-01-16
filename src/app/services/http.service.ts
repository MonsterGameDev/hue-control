import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ipAddress = '192.168.0.116';
  identity = 'roZeTZPeBJpKOZWcmfX7ltbK81P-kt4pUK3xboED';

  baseUrl = `http://${this.ipAddress}/api/${this.identity}`;

  constructor(private httpClient: HttpClient) {}

  getEverything(): Observable<any> {
    return this.httpClient.get<any> (this.baseUrl);
  }
}
