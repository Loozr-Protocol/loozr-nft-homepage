import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Loozr | Decentralized music streaming NFTs',
  description: 'Decentralized music streaming and investment platform on Web 3.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
