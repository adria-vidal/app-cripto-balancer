import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  imports: [CommonModule]
})
export class TransactionHistoryComponent implements OnInit {
  registros = [
    { fecha: '2024-05-21', operacion: 'Comprar', cripto: 'BTC', cantidad: 0.01 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 }
  ];

  ngOnInit(): void {
    // Aquí puedes cargar los registros desde un servicio si es necesario
  }

  verTodo() {
    console.log('Ver todo el historial');
  }
}
