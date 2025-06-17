import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
