// binance-api.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BinanceApiService {
  private baseUrlBinance = 'https://api.binance.com/api/v3';
  private baseUrl = 'https://criptobalance.helioho.st/api/binance-api.php';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getSymbols(): Observable<any> {
    return this.http.get(`${this.baseUrlBinance}/ticker/price`);
  }

  getSpotAccount(): Observable<any> {
    const userId = this.authService.currentUserIdValue;
    if (!userId) {
      throw new Error('User ID is required');
    }

    return this.http.get(`${this.baseUrl}?endpoint=spot-account`, {
      headers: {
        'X-User-ID': userId.toString()
      }
    });
  }

  saveApiKeys(apiKey: string, secretKey: string): Observable<any> {
    const userId = this.authService.currentUserIdValue;
    if (!userId) {
      throw new Error('User ID is required');
    }

    return this.http.post(`${this.baseUrl}?endpoint=save-api-keys`, {
      user_id: userId,
      api_key: apiKey,
      secret_key: secretKey
    });
  }
}
