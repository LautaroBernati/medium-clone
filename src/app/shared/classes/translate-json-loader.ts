import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

import * as translationEn from '../../../assets/i18n/en.json';
import * as translationEs from '../../../assets/i18n/es.json';

export class TranslateJsonLoader implements TranslateLoader {
  constructor() {
  }

  public getTranslation(lang: string) {
    switch (lang) {
      case 'es': {
        return of(translationEs);
      }

      case 'en':
        return of(translationEn);

      default:
        return of(translationEn);
    }
  }
}
