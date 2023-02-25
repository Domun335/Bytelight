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

        <section className="content-section">
          <div className="content-section-image">
            <Image
              src="/image-solution.png"
              alt="solution"
              width="431"
              height="461"
            />
          </div>
          <div className="content-section-text-box">
            <p>
              <span>Solutions for every factor</span>
            </p>
            <h1>Solutions for business collaborations⚡</h1>
            <p>
              Creating custom software solutions that enhance efficiency and
              streamline operations for a variety of industries, including
              individuals, businesses, organizations, and institutions.
            </p>
            <div className="solution-section-text-box-mark">
              <div className="strar-back">
                <Image src="/strar.png" alt="" width="30" height="30" />
              </div>
              <p>Deploy</p>
              <Image src="/text-box-arrow.png" alt="" width="19" height="12" />
            </div>
            <p>
              Deploy is designed to automate and improve the manual processes of
              software administration and management, thereby freeing up the
              engineers to do what they do best.
            </p>
          </div>
        </section>

        <section className="content-section section-rivers">
          <div className="content-section-image">
            <Image
              src="/image-expert.png"
              alt="expert"
              width="431"
              height="461"
            />
          </div>
          <div className="content-section-text-box section-rivers-text">
            <p>
              <span>Solutions for every factor</span>
            </p>
            <h1>Expert software solutions for businesses and individuals</h1>
            <p>
              We design and implement custom software to improve efficiency and
              streamline operations for various clients, including individuals,
              businesses, organizations, and institutions.
            </p>
            <div className="content-section-button">
              <button>Contact us</button>
            </div>
          </div>
        </section>

        <section className="content-section revamp-section">
          <div className="content-section-image">
            <Image
              src="/image-revamp.png"
              alt="revamp"
              width="283"
              height="482"
            />
          </div>
          <div className="content-section-text-box revamp-text-box">
            <p>
              <span>Work with us</span>
            </p>
            <h1>Revamp your business strategies with us today!</h1>
            <hr />
            <p>
              Rethink and revamp the ways your business operates to create new
              and improved solutions
            </p>
            <div className="content-section-button">
              <button>Contact us</button>
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="newsletter-section-text-box">
            <h1>
              Subscribe to
              <br />
              <span>our newsletter</span>
            </h1>
            <div className="newsletter-section-text-box-left">
              <Image
                src="/megaphone.png"
                alt=""
                width="18"
                height="14"
                className="newsletter-image"
              />
              <p>
                Get the latest <span>free</span> event conference notification
                and a reminder of upcoming speakers.
              </p>
            </div>
          </div>
          <div className="newsletter-section-form">
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="input-email"
              />
              <label className="newsletter-section-form-checkbox">
                <input type="checkbox" className="checkbox" />
                <p>
                  I agree with
                  <Link href="#"> Privacy Policy</Link> and
                  <Link href="#"> Terms of Conditions</Link>
                </p>
              </label>
              <button>
                Subscribe
                <Image src="/subscribe.png" alt="" width="15" height="11" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-cointainer">
            <section className="footer-top-section">
              <div className="footer-top-section-logo">
                <Image
                  src="/logo-footer.png"
                  alt="logo"
                  width="232"
                  height="47"
                />
              </div>
              <div className="footer-top-section-container-lists">
                <div className="footer-top-section-list">
                  <h3>Product</h3>
                  <ul>
                    <li>
                      <Link href="#">Deploy</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-section-list">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Industries</Link>
                    </li>
                    <li>
                      <Link href="#">How we work</Link>
                    </li>
                    <li>
                      <Link href="#">Career</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-top-section-list">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <Link href="#">Terms</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy</Link>
                    </li>
                    <li>
                      <Link href="#">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="footer-bottom-section">
              <p>Bytelight. © 2023. All Rights Reserved.</p>
              <div className="footer-bottom-section-media">
                <Link href="#">
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    width="48"
                    height="48"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width="48"
                    height="48"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width="48"
                    height="48"
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  )
}
