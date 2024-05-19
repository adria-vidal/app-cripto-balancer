import { Component } from '@angular/core';
import { AddCryptoComponent } from './add-crypto/add-crypto.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AddCryptoComponent, TransactionHistoryComponent, TotalBalanceComponent]
})
export class AppComponent {}
