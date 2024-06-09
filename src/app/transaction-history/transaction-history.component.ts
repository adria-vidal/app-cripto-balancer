import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDialogComponent } from './transaction-dialog/transaction-dialog.component';

@Component({
  standalone: true,
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
  imports: [CommonModule, TransactionDialogComponent]
})
export class TransactionHistoryComponent implements OnInit {
  registros = [
    // Transacciones de ejemplo
    { fecha: '2024-05-21', operacion: 'Comprar', cripto: 'BTC', cantidad: 0.01 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-21', operacion: 'Vender', cripto: 'BTC', cantidad: 0.01 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-21', operacion: 'Comprar', cripto: 'BTC', cantidad: 0.01 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'XRP', cantidad: 0.1 },
    { fecha: '2024-05-21', operacion: 'Comprar', cripto: 'BTC', cantidad: 0.01 },
    { fecha: '2024-05-22', operacion: 'Vender', cripto: 'ETH', cantidad: 0.1 },
    { fecha: '2024-05-21', operacion: 'Comprar', cripto: 'LTC', cantidad: 0.01 }
  ];

  isDialogVisible = false;

  ngOnInit(): void {
    // Aquí puedes cargar los registros desde un servicio si es necesario
  }

  verTodo() {
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }
}
