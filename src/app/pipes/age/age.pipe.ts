import { Pipe, PipeTransform } from '@angular/core'
import { differenceInYears, parse } from 'date-fns'

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(birthDate: string): number {
    const date: Date = parse(birthDate, 'yyyy-M-d', new Date())
    return differenceInYears(new Date(), date)
  }
}
