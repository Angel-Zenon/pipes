import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Languaje, Local } from '../../services/local';
@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html'
})
export default class BasicPage {
  localService = inject(Local);
  currentLocal = signal(inject(LOCALE_ID)); // obtenemos el idioma local acutal

  nameLower = signal<string>('angel');
  nameUpper = signal<string>('ZENON')
  fullname = signal<string>('angEL ZenóN')

  customDate = signal(new Date());

  tickingDateEffect = effect(  (onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  })

  changeLocal(locale : Languaje) {
    console.log({ locale })
    this.localService.changeLocal(locale);
  }
}
