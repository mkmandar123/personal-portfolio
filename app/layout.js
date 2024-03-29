import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Mandar Kulkarni',
  description: 'Welcome to my portfolio! As a key member of a Y Combinator startup, I thrive at the intersection of tech and business, spearheading the tech side for our acquisition team. Through strategic architectural enhancements and a keen eye for optimization, I\'ve not only boosted conversion rates but also optimized system stability and performance, significantly reducing server costs. With full ownership of the Android codebase, I\'ve demonstrated my ability to innovate and execute single-handedly. Explore my work and witness firsthand the impact of my technical prowess in driving success for cutting-edge ventures.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
