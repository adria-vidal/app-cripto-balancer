import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://tommy2.heliohost.org/'; //  URL de tu backend PHP

  constructor(private http: HttpClient) {}

  getBalance(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/balance?user_id=${userId}`);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/transactions`, transaction);
  }

  updateBalance(userId: number, balance: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/balance`, { user_id: userId, total_usdt: balance });
  }
}
