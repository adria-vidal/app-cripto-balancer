import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BinanceApiService {
  private baseUrl = 'https://api.binance.com/api/v3';

  constructor(private http: HttpClient) {}

  getSymbols(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ticker/price`);
  }
}
