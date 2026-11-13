import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero, ColorMap } from '../../interfaces/hero';
import { heroes } from '../../data/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroCreatorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  readonly name = signal<string>('Angel raymundo Pablo zenón');
  toUpper = signal<boolean>(true);
  color = ColorMap;
  switchUpper() {
    this.toUpper.set(!this.toUpper());
  }

  heroes = signal<Hero[]>(heroes);
}
