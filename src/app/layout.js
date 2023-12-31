import { PT_Sans } from 'next/font/google'
import './components/globals.css'

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

// const bloggerSans = BloggerSans({
//   subsets: ['latin'],
//   weight: ['400', '700']
// })

export const metadata = {
  title: 'Hands of Friends',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA">
      <body className={ptSans.className}>{children}</body>
    </html>
  )
}
