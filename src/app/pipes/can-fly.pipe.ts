import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'canFly'
})
export class CanFlyPipe implements PipeTransform {
    transform( canIFly : boolean) : string {
        return canIFly ? 'Puede Volar' : 'No puede volar'
    }
}