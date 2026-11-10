import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html'
})
export class Card {
  title = input.required<string>();
}
