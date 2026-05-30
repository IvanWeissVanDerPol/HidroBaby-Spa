// Root Layout
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HidroBaby Spa - Baby Spa en Fernando de la Mora',
  description: 'Spa post vacunas, hidromasaje y fisioterapia infantil en Fernando de la Mora. Más de 1,300 familias confían en nosotros.',
  metadataBase: new URL('https://hidrobaby-spa.paragu-ai.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}