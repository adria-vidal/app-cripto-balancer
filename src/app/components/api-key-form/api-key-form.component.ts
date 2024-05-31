// api-key-form.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BinanceApiService } from '../../services/binance-api.service';

@Component({
  standalone: true,
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  imports: [CommonModule, FormsModule]
})
export class ApiKeyFormComponent {
  apiKey: string = '';
  secretKey: string = '';

  constructor(private binanceApiService: BinanceApiService) {}

  saveKeys() {
    this.binanceApiService.saveApiKeys(this.apiKey, this.secretKey).subscribe(response => {
      console.log('API keys saved successfully:', response);
    }, error => {
      console.error('Error saving API keys:', error);
    });
  }
}
