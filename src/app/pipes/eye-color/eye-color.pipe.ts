import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'eyeColor' })
export class EyeColorPipe implements PipeTransform {
  transform(eyeColor: string): string {
    eyeColor = eyeColor.toLowerCase()
    switch (eyeColor) {
      case 'red':
      case 'green':
        return eyeColor
      case 'hazel':
        return 'saddlebrown'
      case 'amber':
        return 'darkgoldenrod'
      default:
        throw new Error(`Unknown eyeColor: ${eyeColor}`)
    }
  }
}
