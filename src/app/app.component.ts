import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddCryptoComponent } from "./add-crypto/add-crypto.component";
import { TotalBalanceComponent } from "./total-balance/total-balance.component";
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, CommonModule, AddCryptoComponent, TotalBalanceComponent, TransactionHistoryComponent, LoginComponent, NavComponent, FooterComponent]
})
export class AppComponent {
  authService = inject(AuthService);

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
