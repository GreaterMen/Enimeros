import "./styles/globals.css";
import { Itim } from 'next/font/google'

const itim = Itim({
 weight: '400',
 subsets: ['latin'],
 display: 'swap',
})

export default function RootLayout({ children }) {
 return (
  <html lang="en">
  <body className={itim.className} style={{ backgroundColor: '#1A1A2E' }}>{children}</body>
</html>
 )
}
