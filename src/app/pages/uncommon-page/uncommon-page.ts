import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

export type Gener = 
   'masculino' | 'femenina'


type Client = {
  name: string,
  gender : Gener
  age: number,
  address : string
}

@Component({
  selector: 'uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  man : Client = {
    name : 'Angel',
    gender: 'masculino',
    address : 'ocklama',
    age : 21
  }

  woman : Client = {
    name : 'Perlita',
    gender: 'femenina',
    address : 'utopia',
    age : 23
  }

  // I18nSelectPipe 
  client = signal<Client>(this.man);

  invitationMap = {
    masculino : 'tenerlo',
    femenina: 'tenerla'
  }

  chageClient() {
    if( this.client().gender === 'masculino' ) this.client.set(this.woman);
    else this.client.set(this.man);
  }



  // i18nPluralPipe
  clients = signal<string[]>(
    [
      'Angel',
      'Perla',
      'Ruby',
      'Fernando',
      'Limon', 
      'Matadamas'
    ]
  )
  
  clientsMap = signal({
    '=0' :  'no hay nigun cliente esperando',
    '=1' :  'tenemos a un cliente esperando',
    '=2' :  'tenemos a 2 clientes esperando',
    other: 'tenemos # clientes esperando '
  })


  deleteClient() {
    this.clients.update( prev => prev.slice(1))
  }

  // keyvaluepipe
  profile = {
    name : 'Ángel',
    age : 22,
    country : 'México'
  }

  // ascyn trabaja con promesas, observables, asincronos

  promiseValue : Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('TENEMOS DATA EN LA PROMESA');
      console.log('promesa finaizada')
    }, 2000)
  } )

  // AsyncObsevable

  readonly counter = signal<number>(0);

  myObservableTimer = interval( 2000 ).pipe(
    tap( value => this.counter.update )
  )

} 
