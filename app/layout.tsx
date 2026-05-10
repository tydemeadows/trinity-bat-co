import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trinity Bat Co. — Hand Crafted Wood Bats',
  description:
    'Pro-grade hand crafted wood bats. Steel compressed, pro ink dot certified, made in the USA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
