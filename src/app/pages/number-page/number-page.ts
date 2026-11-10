import { Component, signal } from '@angular/core';
import { PercentPipe, DecimalPipe, CurrencyPipe } from '@angular/common'; 
@Component({
  selector: 'number-page',
  imports: [ PercentPipe, DecimalPipe, CurrencyPipe],
  templateUrl: './number-page.html',
})
export default class NumberPage {
  totalSells = signal<number>(2_548_130_012.5567);
  discount = signal<number>(.4836);
}
