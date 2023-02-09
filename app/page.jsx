import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
})

export default function Home() {
  return (
    <div className={inter.className}>
      <header>
        <div className="header-cointeiner">
          <div className="popup">
            <Image src="/star.png" alt="" width="20" height="19" />
            <p>
              <Link href="#">A custom notification goes here</Link>
            </p>
          </div>
          <div className="nav">
            <div className="logo">
              <Image src="/logo.png" alt="logo" width="126" height="21" />
            </div>
            <div className="nav-position">
              <nav>
                <div className="nav-bar">
                  <ul>
                    <li>
                      <Link href="#">
                        Products
                        <Image
                          src="/arrow-down.png"
                          alt=""
                          width="16"
                          height="16"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Company</Link>
                    </li>
                    <li>
                      <Link href="#">Industries</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <button className="nav-button" href="#">
                Contact sales
                <Image src="/arrow-right.png" alt="" width="16" height="16" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="main-section">
          <div className="main-section-text">
            <div className="main-section-text-first">
              <p>Industry Software Solution⚡</p>
              <h1>Custom digital platform software development</h1>
              <div className="main-section-buttons">
                <button className="main-button-black">Talk to sales</button>
                <button className="main-button-white">
                  Check our products ✨
                </button>
              </div>
            </div>
            <div className="main-section-text-second">
              <p>
                We specialize in developing custom software solutions that
                enhance efficiency and organization for a variety of clients in
                various industries.
              </p>
            </div>
          </div>
          <div className="main-section-image">
            <Image
              src="/main-img.png"
              alt="hero"
              width="1280"
              height="560"
              className="hero"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
