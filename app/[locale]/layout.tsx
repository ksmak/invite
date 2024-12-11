import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import SideNav from '../ui/side-nav'
import type { Metadata } from 'next'
import '@/app/globals.css'
import { getInvitationCategories } from '../lib/data'
import { font_vars } from '@/app/fonts'

export const metadata: Metadata = {
  title: 'Invite',
  description: 'Invite'
}

export default async function LocaleLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  const categories = await getInvitationCategories()

  return (
    <html lang={locale} className={font_vars}>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SideNav categories={categories} />
          <main className='container mx-auto'>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
