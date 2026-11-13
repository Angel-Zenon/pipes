import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
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
  searchCritery = signal<string>('')
  orderCritery = signal<keyof Hero | null>(null);

  heroesFiltered = computed( () => {
    if (this.searchCritery() === '') return this.heroes();
    return this.heroes().filter( hero => hero.name.toLowerCase().includes(this.searchCritery()))
  })


  heroesOrdered = computed( () => {
    if (!this.orderCritery()) return this.heroesFiltered();
    
    switch( this.orderCritery() ) {
      case 'name' : return this.heroesFiltered().sort( (a,b) => a.name.localeCompare(b.name)  );
      case 'canFly':  return this.heroesFiltered().sort( (a, b) => (a.canFly === b.canFly) ? 0 : a.canFly ? -1 : 1 )
      default : return this.heroesFiltered() ;
    }
  } )
}
