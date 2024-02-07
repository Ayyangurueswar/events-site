import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import Footer from './ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Events',
  description: "Find what's happening",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  )
}
