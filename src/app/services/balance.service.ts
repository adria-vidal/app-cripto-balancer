import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

type OperationType = 'Comprar' | 'Vender'; // Definir el tipo literal

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  totalUSDT = signal(0);

  updateBalance(amount: number, operation: OperationType) { // Utiliza el tipo literal
    if (operation === 'Comprar') {
      this.totalUSDT.set(this.totalUSDT() - amount);
    } else {
      this.totalUSDT.set(this.totalUSDT() + amount);
    }
  }
}
