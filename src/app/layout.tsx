import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import FooterCredit from '@/components/FooterCredit';
import AuthProvider from '@/utils/AuthProvider';

const quickSand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Rao's World!",

  description: 'Usama Rao is a full-stack Web Developer From Bangladesh.',
  keywords: [
    'Usama',
    'rao',
    'Rao Usama',
    'Rao',
    'Usama rao',
    'usama',
    'Usama apu',
    'Usama',
    'Usama apu web developer',
    'Usama apu web developer from bangladesh',
    'Usama apu js developer',
    'Usama apu next.js developer',
    'Usama apu react developer',
    'Usama apu react',
    'Usama apu pakisataniwebdeveloper',
    'Usama apu Usama',
    'Usama apu web dev from bd',
    'Usama apu aaru',
    'web developer',
    'web developer from bangladesh',
    'js developer',
    'next.js developer',
    'react developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${quickSand.className} mx-auto max-w-screen-2xl text-[#e6ebff]`}
      >
        <AuthProvider>
          <NavBar />
          {children}
          <FooterCredit />
        </AuthProvider>
      </body>
    </html>
  );
}
