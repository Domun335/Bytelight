import Head from './head'
import Footer from './components/footer'
import Header from './components/header'
import './globals.scss'

export default function Layout({ children }) {
  return (
    <html lang="pl">
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
