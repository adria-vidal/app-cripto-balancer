import { Component, signal, computed } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-transaction-history',
  templateUrl: `./transaction-history.component.html`
})
export class TransactionHistoryComponent {
  registros = signal([]); // Suponiendo que registros es una lista de objetos

  verTodo() {
    // Lógica para ver todo el historial
  }
}
