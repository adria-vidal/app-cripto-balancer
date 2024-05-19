import { Component, computed } from '@angular/core';
import { BalanceService } from '../services/balance.service'; // Importa el servicio

@Component({
  standalone: true,
  selector: 'app-total-balance',
  template: `
    <div>Total en USDT: {{ totalUSDT() }}</div>
  `
})
export class TotalBalanceComponent {
  constructor(private balanceService: BalanceService) {}

  totalUSDT = computed(() => {
    return this.balanceService.totalUSDT();
  });
}