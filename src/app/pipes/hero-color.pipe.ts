import { Pipe, PipeTransform } from "@angular/core";
import { Color, ColorMap } from "../interfaces/hero";



@Pipe({
    name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {
    transform( colorNum : Color ) : string {
        return Color[colorNum];
    }
}