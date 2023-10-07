
import './globals.css'
import type { Metadata } from 'next'
//import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

// 已定義在 middleware.ts
// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'de' }];
// }

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'SARC-System',
  description: '',
}

export default async function LocaleLayout(props:any) {
  //console.log(locale);
  let messages;
  try {
    messages = (await import(`../../messages/${props.params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={props.params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={props.params.locale} messages={messages}>
          <Header forTest />
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}