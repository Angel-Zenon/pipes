import { Pipe, PipeTransform } from "@angular/core";
import { Creator } from "../interfaces/hero";

@Pipe({
    name : 'heroCreator'
})
export class HeroCreatorPipe implements PipeTransform {
    transform(value: number) : string {
        return value === Creator.DC ? 'DC' : 'Marvel'
    }
}