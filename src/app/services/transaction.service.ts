import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://criptobalance.helioho.st/api'; // URL de tu backend PHP

  constructor(private http: HttpClient) {}

  getTransactions(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions.php?user_id=${userId}`);
  }

  addTransaction(transaction: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/transactions.php`, transaction);
  }

  updateBalance(userId: number, balance: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/balance`, { user_id: userId, total_usdt: balance });
  }
}
