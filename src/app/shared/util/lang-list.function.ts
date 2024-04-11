import { AppLanguage } from '../types/language-list.interface';

export function getLangList(): AppLanguage[] {
  return [
    { value: 'en', description: 'English' },
    { value: 'es', description: 'Español' },
  ];
}
