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
        <section className="testimonials">
          <div className="testimonials-text-box">
            <p>
              Used by over <span>50+ milion</span> users worldwide
              <br /> and trusted by top-tier companies.
            </p>
          </div>
          <div className="testimonials-icons">
            <Image src="/forbes.png" alt="forbes" width="70" height="19" />
            <Image src="/fortune.png" alt="fortune" width="80" height="19" />
            <Image src="/tc.png" alt="tc" width="47" height="23" />
            <Image src="/wsj.png" alt="wsj" width="52" height="28" />
            <Image src="/ft.png" alt="ft" width="91" height="28" />
            <Image src="/cnbc.png" alt="cnbc" width="42" height="32" />
          </div>
        </section>
        <section className="cards-section">
          <div className="cards-section-text-box">
            <p>Solutions for every factor</p>
            <h1>
              Software architecture, design and
              <br /> implementation for any industry🔥.
            </h1>
          </div>
          <div className="cards-section-cointeiner-card">
            <div className="crad">
              <div>
                <div className="frame">
                  <Image src="/qube.png" alt="" width="22" height="22" />
                </div>
                <h2>Custom software development</h2>
              </div>
              <p>
                We design and build custom software applications to meet the
                specific needs of our clients.
              </p>
            </div>
            <div className="crad">
              <div>
                <div className="frame">
                  <Image src="/vector.png" alt="" width="22" height="21" />
                </div>
                <h2>Business consulting</h2>
              </div>
              <p>
                Assisting other companies in improving business strategies and
                operations
              </p>
            </div>
            <div className="crad">
              <div>
                <div className="frame">
                  <Image src="/eath.png" alt="" width="19" height="19" />
                </div>
                <h2>Web development services</h2>
              </div>
              <p>
                Creating and designing functional websites for businesses or
                individuals.
              </p>
            </div>
            <div className="crad">
              <div>
                <div className="frame">
                  <Image src="/qubemore.png" alt="" width="17" height="17" />
                </div>
                <h2>Application maintenance and support</h2>
              </div>
              <p>
                We ensure software applications run smoothly and efficiently
                through ongoing support and maintenance
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
