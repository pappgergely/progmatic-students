import {Pipe, PipeTransform} from '@angular/core';
import {Gender} from "../enums/gender.enum";

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender): string {
    return value === Gender.FEMALE ? 'Nő' : 'Férfi';
  }

}
