import { Pipe, PipeTransform } from '@angular/core'
import { camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase } from 'lodash-es'

@Pipe({ name: 'case' })
export class CasePipe implements PipeTransform {
  transform(str: string, pCase: 'camel' | 'kebab' | 'lower' | 'snake' | 'start' | 'upper'): string {
    switch (pCase) {
      case 'camel':
        return camelCase(str)
      case 'kebab':
        return kebabCase(str)
      case 'lower':
        return lowerCase(str)
      case 'snake':
        return snakeCase(str)
      case 'start':
        return startCase(str)
      case 'upper':
        return upperCase(str)
    }
  }
}
