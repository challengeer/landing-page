import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'sk'];
const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => ({
  locale: locale || defaultLocale,
  // messages: (await import(`./locales/${locale || defaultLocale}.json`)).default
  messages: (await import(`@/messages/${locale || defaultLocale}.json`)).default
})); 