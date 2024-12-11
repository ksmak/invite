import {
  Inter,
  Roboto,
  Montserrat,
  Lobster,
  Great_Vibes,
  Marck_Script
} from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const roboto = Roboto({
  subsets: ['cyrillic'],
  variable: '--font-roboto',
  weight: ['400', '700']
})

const monserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-monserrat',
  weight: ['400', '700']
})

const lobster = Lobster({
  subsets: ['cyrillic'],
  variable: '--font-lobster',
  weight: ['400']
})

const daneehand = localFont({
  src: '../fonts/Daneehand Regular Cyr/Daneehand Regular Cyr.ttf',
  display: 'swap',
  variable: '--font-daneehand'
})

const vollda = localFont({
  src: '../fonts/Vollda/Vollda-Bold.otf',
  display: 'swap',
  variable: '--font-vollda'
})

const moniqa = localFont({
  src: '../fonts/Moniqa/Moniqa-BlackDisplay.otf',
  display: 'swap',
  variable: '--font-moniqa'
})

const stengazeta = localFont({
  src: '../fonts/Stengazeta/Stengazeta-Regular_5.ttf',
  display: 'swap',
  variable: '--font-stengazeta'
})

const gawaa = localFont({
  src: '../fonts/Gawaa/Gawaa-Regular.otf',
  display: 'swap',
  variable: '--font-gawaa'
})

export const font_vars = `
${inter.variable} 
${roboto.variable} 
${monserrat.variable} 
${lobster.variable} 
${daneehand.variable} 
${vollda.variable} 
${moniqa.variable} 
${stengazeta.variable} 
${gawaa.variable} 
`

export const font_names = [
  {
    title: 'Inter',
    var: 'var(--font-inter)'
  },
  {
    title: 'Roboto',
    var: 'var(--font-roboto)'
  },
  {
    title: 'Monserrat',
    var: 'var(--font-monserrat)'
  },
  {
    title: 'Lobster',
    var: 'var(--font-lobster)'
  },
  {
    title: 'Great Vibes',
    var: 'Great Vibes'
  },
  {
    title: 'Mark Script',
    var: 'Mark Script'
  },
  {
    title: 'Daneehand',
    var: 'var(--font-daneehand)'
  },
  {
    title: 'Vollda',
    var: 'var(--font-vollda)'
  },
  {
    title: 'Moniqa',
    var: 'var(--font-moniqa)'
  },
  {
    title: 'Stengazeta',
    var: 'var(--font-stengazeta)'
  },
  {
    title: 'Gawaa',
    var: 'var(--font-gawaa)'
  }
]
