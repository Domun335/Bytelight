import Head from './head'
import './globals.scss'

export default function Layout({ children }) {
  return (
    <html lang="pl">
      <Head />
      <body>{children}</body>
    </html>
  )
}
