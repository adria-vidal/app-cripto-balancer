import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TransactionDialogComponent implements OnInit {
  @Input() registros: any[] = [];
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  availableCryptos: string[] = [];
  selectedCrypto: string = '';
  selectedOperation: string = '';
  filteredRegistros: any[] = [];

  ngOnInit() {
    this.filteredRegistros = this.registros;

    // Extraer todas las criptomonedas disponibles de las transacciones
    this.availableCryptos = [...new Set(this.registros.map(registro => registro.cripto))];
  }

  ngOnChanges() {
    if (this.isVisible) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  closeDialog() {
    this.isVisible = false;
    this.close.emit();
    document.body.classList.remove('modal-open');
  }

  applyFilters() {
    this.filteredRegistros = this.registros.filter(registro => {
      const matchesCrypto = this.selectedCrypto ? registro.cripto === this.selectedCrypto : true;
      const matchesOperation = this.selectedOperation ? registro.operacion === this.selectedOperation : true;
      return matchesCrypto && matchesOperation;
    });
  }
}
