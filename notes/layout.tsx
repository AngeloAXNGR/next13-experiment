import './globals.css'
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight:['400', '700'],
  subsets:['latin'],
  variable: '--font-montserrat'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className} mx-32`}>
        <nav>
          <h1>Logo</h1>
          <ul className="font-montserrat">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
