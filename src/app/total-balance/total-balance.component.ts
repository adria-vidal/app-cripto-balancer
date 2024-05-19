import { Component, computed } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-total-balance',
  template: `
    <div>Total en USDT: {{ totalUSDT() }}</div>
  `
})
export class TotalBalanceComponent {
  totalUSDT = computed(() => {
    // Suponiendo que tienes alguna lógica para calcular el total
    return 0;
  });
}
