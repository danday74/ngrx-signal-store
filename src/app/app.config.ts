import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { AppInitService } from '@services/app-init/app-init.service'

const initializeApp = (appInitService: AppInitService) => (): Promise<void> => appInitService.init()

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAppInitializer(() => {
      const initializerFn = initializeApp(inject(AppInitService))
      return initializerFn()
    }),
  ],
}
