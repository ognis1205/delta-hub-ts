/**
 * @fileoverview Defines Root layout.
 * @copyright Shingo OKAWA 2023
 */
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

import Providers from '@/app/providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeltaHub',
  description: 'Data Sharing Platform for Everyone',
};

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <html lang={'en'}>
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

Layout.displayName = 'RootLayout';

export default Layout;
