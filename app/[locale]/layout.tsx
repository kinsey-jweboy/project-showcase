import '@/styles/globals.css';
import '@/styles/loading.css';
import '@/styles/bb8.css';
import { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import i18nConfig from '@/i18nConfig';
import { cookies } from 'next/headers';
import { dir } from 'i18next';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className="dark"
      suppressHydrationWarning
    >
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar locale={locale} />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Jweboy Team</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}