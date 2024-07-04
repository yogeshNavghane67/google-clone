import Footer from '@/components/Footer';
import './globals.css';
import { Suspense } from 'react';


export const metadata = {
  title: 'Google Clone',
  description:
    'An open source Google clone built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        <Suspense>
        {children}
        </Suspense>
        
   <Footer/>
      </body>
    </html>
  );
}
