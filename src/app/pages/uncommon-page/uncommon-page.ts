import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe],
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

} 
