import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.scss'],
  imports: [CommonModule]
})
export class TransactionDialogComponent {
  @Input() registros: any[] = [];
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.isVisible = false;
    this.close.emit(); // Emitir el evento de cierre
  }
}
