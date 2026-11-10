import { Injectable, signal } from '@angular/core';

export type Languaje = 
  | 'es-MX'
  | 'en'
  | 'fr';

@Injectable({
  providedIn: 'root',
})
export class Local {

  private currentLocal = signal<Languaje>('es-MX');

  constructor() {
    this.currentLocal.set(
      (localStorage.getItem('locale') as Languaje) ?? 'es-MX'
    )
  }

  getLocal() {
    return this.currentLocal();
  }

  changeLocal(locale : Languaje) {
    localStorage.setItem('locale', locale);
    this.currentLocal.set(locale);
    window.location.reload();
  }
}
