import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { BinanceApiService } from '../services/binance-api.service';

@Component({
  standalone: true,
  selector: 'app-add-crypto',
  templateUrl: './add-crypto.component.html',
  imports: [CommonModule]  // Asegúrate de importar CommonModule
})
export class AddCryptoComponent implements OnInit {
  cryptoName = signal('');
  symbols = signal<string[]>([]);

  constructor(private binanceApi: BinanceApiService) {}

  ngOnInit() {
    this.binanceApi.getSymbols().subscribe(data => {
      const symbolList = data.map((item: any) => item.symbol);
      this.symbols.set(symbolList);
      console.log(this.symbols()); // Mostrar los símbolos en la consola
    });
  }

  onSymbolSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      this.cryptoName.set(selectElement.value);
    }
  }

  agregarCripto() {
    if (this.cryptoName()) {
      console.log(`Criptomoneda agregada: ${this.cryptoName()}`);
      this.cryptoName.set(''); // Limpiar el campo de texto
    }
  }
}
