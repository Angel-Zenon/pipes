import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleCase', // 'angel'  | toggleCase

}) export class ToggleCasePipe implements PipeTransform {
    transform(value: string, alter : boolean) : string {
        return alter? value.toUpperCase() : value.toLowerCase();
    }
}