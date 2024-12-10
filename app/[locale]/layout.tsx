import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import SideNav from '../ui/side-nav';
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Invite",
  description: "Invite",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SideNav />
          <main className='container mx-auto'>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}