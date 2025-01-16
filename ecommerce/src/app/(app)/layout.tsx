import { Montserrat } from 'next/font/google';
import './global.sass';
import { Navbar } from '@components/organisms';

const inter = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-bg-color ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
