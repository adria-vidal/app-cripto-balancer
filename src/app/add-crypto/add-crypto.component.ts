import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinanceApiService } from '../services/binance-api.service';
import { BalanceService } from '../services/balance.service';

//TIPOS DE DATOS
type OperationType = 'Comprar' | 'Vender';

@Component({
  standalone: true,
  selector: 'app-add-crypto',
  templateUrl: './add-crypto.component.html',
  imports: [CommonModule]  // Asegúrate de importar CommonModule
})
export class AddCryptoComponent implements OnInit {
  cryptoName = signal('');
  filter = signal('');
  symbols = signal<{ symbol: string, price: string }[]>([]);


  filteredSymbols = computed(() =>
    this.symbols().filter(symbol =>
      symbol.symbol.toLowerCase().includes(this.filter().toLowerCase())
    )
  );

  selectedPrice = signal('');
  manualPrice = signal('');
  quantity = signal('');

  private balanceService = inject(BalanceService);

  constructor(private binanceApi: BinanceApiService) {}

  ngOnInit() {
    this.binanceApi.getSymbols().subscribe(data => {
      const symbolList = data.map((item: any) => ({
        symbol: item.symbol,
        price: item.price
      }));
      this.symbols.set(symbolList);
      console.log(this.symbols());

      // Seleccionar el primer símbolo por defecto
      if (symbolList.length > 0) {
        this.cryptoName.set(symbolList[0].symbol);
        const formattedPrice = parseFloat(symbolList[0].price).toFixed(3);
        this.selectedPrice.set(formattedPrice);
      }
    });
  }

  selectSymbol(symbol: string) {
    this.cryptoName.set(symbol);
    const selectedSymbolObj = this.symbols().find(s => s.symbol === symbol);
    if (selectedSymbolObj) {
      const formattedPrice = parseFloat(selectedSymbolObj.price).toFixed(3);
      this.selectedPrice.set(formattedPrice);
      this.manualPrice.set(''); // Limpiar el precio manual si se selecciona un nuevo símbolo
    }
  }

  onSymbolSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const selectedSymbol = selectElement.value;
      this.cryptoName.set(selectedSymbol);
      const selectedSymbolObj = this.symbols().find(s => s.symbol === selectedSymbol);
      if (selectedSymbolObj) {
        const formattedPrice = parseFloat(selectedSymbolObj.price).toFixed(3);
        this.selectedPrice.set(formattedPrice);
        this.manualPrice.set(''); // Limpiar el precio manual si se selecciona un nuevo símbolo
      }
    }
  }

  onManualPriceChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.manualPrice.set(inputElement.value);
    }
  }


  onFilterChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.filter.set(inputElement.value);
      const filtered = this.filteredSymbols();
      if (filtered.length > 0) {
        this.selectSymbol(filtered[0].symbol);
      } else {
        this.selectedPrice.set('');
      }
    }
  }

  onQuantityChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.quantity.set(inputElement.value);
    }
  }

  comprarCripto() {
    this.operarCripto('Comprar');
  }

  venderCripto() {
    this.operarCripto('Vender');
  }

  operarCripto(tipo: OperationType) {
    const priceToUse = parseFloat(this.manualPrice() || this.selectedPrice());
    const quantityToUse = parseFloat(this.quantity());
    const totalChange = priceToUse * quantityToUse;

    if (this.cryptoName() && this.quantity()) {
      this.balanceService.updateBalance(totalChange, tipo); // Actualiza el balance a través del servicio
      
      console.log(`Criptomoneda ${tipo.toLowerCase()}ada: ${this.cryptoName()} a un precio de: ${priceToUse} y cantidad: ${quantityToUse}`);

      this.cryptoName.set(''); // Limpiar el campo de texto
      this.selectedPrice.set(''); // Limpiar el precio seleccionado
      this.manualPrice.set(''); // Limpiar el precio manual
      this.quantity.set(''); // Limpiar la cantidad
    }
  }
}
