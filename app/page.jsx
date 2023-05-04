import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__popup">
          <Link href="/">
            <p>A custom notification goes here</p>
          </Link>
        </div>

        <div className="header__container">
          <Image src="/Logo.svg" alt="logo" width="127" height="21" />

          <div className="header__container--left">
            <nav>
              <ul className="header__navbar">
                <Link href="/">
                  <li className="header__navbar--arrow">Products</li>
                </Link>
                <Link href="/">
                  <li>Company</li>
                </Link>
                <Link href="/">
                  <li>Industries</li>
                </Link>
              </ul>
            </nav>

            <button className="header__button">Contact sales</button>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero__up">
            <div className="hero__up--first">
              <p>INDUSTRY SOFTWARE SOLUTION⚡</p>
              <h1>Custom digital platform software development</h1>

              <div className="hero__buttons">
                <button className="hero__button--black">Talk to sales</button>
                <button className="hero__button--white">Check our products ✨</button>
              </div>
            </div>

            <p className="hero__up--second">
              We specialize in developing custom software solutions that enhance
              efficiency and organization for a variety of clients in various industries.
            </p>
          </div>

          <Image
            src="/main-image.svg"
            alt="hero"
            width="1280"
            height="560"
            className="hero__image"
          />
        </section>

        <section className="testimonials">
          <div className="testimonials__text">
            <p>
              Used by over <span>50+ milion</span> users worldwide
              <br /> and trusted by top-tier companies.
            </p>
          </div>

          <div className="testimonials__icons">
            <Image src="/forbes.svg" alt="forbes" width="50" height="50" />
            <Image src="/fortune.svg" alt="fortune" width="50" height="50" />
            <Image src="/tc.svg" alt="tc" width="50" height="50" />
            <Image src="/wsj.svg" alt="wsj" width="50" height="50" />
            <Image src="/ft.svg" alt="ft" width="50" height="50" />
            <Image src="/cnbc.svg" alt="cnbc" width="50" height="50" />
          </div>
        </section>

        <section className="cards">
          <div className="cards__text">
            <p>SOLUTIONS FOR EVERY FACTOR</p>

            <h1>
              Software architecture, design and
              <br /> implementation for any industry🔥.
            </h1>
          </div>

          <div className="cards__cointeiner">
            <div className="cards__card">
              <span>
                <div className="cards__card--frame">
                  <Image src="/qube.svg" alt="" width="20" height="20" />
                </div>

                <h2>Custom software development</h2>
              </span>

              <p>
                We design and build custom software applications to meet the specific
                needs of our clients.
              </p>
            </div>

            <div className="cards__card">
              <span>
                <div className="cards__card--frame">
                  <Image src="/bulb.svg" alt="" width="20" height="20" />
                </div>

                <h2>Business consulting</h2>
              </span>

              <p>
                Assisting other companies in improving business strategies and operations
              </p>
            </div>

            <div className="cards__card">
              <span>
                <div className="cards__card--frame">
                  <Image src="/eath.svg" alt="" width="20" height="20" />
                </div>
                <h2>Web development services</h2>
              </span>

              <p>
                Creating and designing functional websites for businesses or individuals.
              </p>
            </div>

            <div className="cards__card">
              <span>
                <div className="cards__card--frame">
                  <Image src="/qubemore.svg" alt="" width="20" height="20" />
                </div>

                <h2>Application maintenance and support</h2>
              </span>

              <p>
                We ensure software applications run smoothly and efficiently through
                ongoing support and maintenance
              </p>
            </div>
          </div>
        </section>

        <section className="content">
          <Image
            src="/image-solution.svg"
            alt="solution"
            width="400"
            height="400"
            className="content__image"
          />

          <div className="content__texts">
            <p>
              <span>Solutions for every factor</span>
            </p>
            <h1>Solutions for business collaborations⚡</h1>
            <p>
              Creating custom software solutions that enhance efficiency and streamline
              operations for a variety of industries, including individuals, businesses,
              organizations, and institutions.
            </p>
            <div className="content__texts--mark">
              <div className="strar-back">
                <Image src="/star-blue.svg" alt="star" width="25" height="25" />
              </div>
              <Link href="/">
                <p>Deploy</p>
              </Link>
            </div>

            <p>
              Deploy is designed to automate and improve the manual processes of software
              administration and management, thereby freeing up the engineers to do what
              they do best.
            </p>
          </div>
        </section>

        <section className="content content--rivers">
          <Image
            src="/image-expert.svg"
            alt="expert"
            width="400"
            height="400"
            className="content__image"
          />

          <div className="content__texts content--rivers__texts">
            <p>
              <span>Solutions for every factor</span>
            </p>

            <h1>Expert software solutions for businesses and individuals</h1>

            <p>
              We design and implement custom software to improve efficiency and streamline
              operations for various clients, including individuals, businesses,
              organizations, and institutions.
            </p>

            <button className="content__button">Contact us</button>
          </div>
        </section>

        <section className="content revamp">
          <Image
            src="/image-revamp.svg"
            alt="revamp"
            width="400"
            height="400"
            className="content__image"
          />

          <div className="content__texts revamp__texts">
            <p>
              <span>Work with us</span>
            </p>
            <h1>Revamp your business strategies with us today!</h1>
            <hr />
            <p>
              Rethink and revamp the ways your business operates to create new and
              improved solutions
            </p>

            <button className="content__button">Contact us</button>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter__texts">
            <h1>
              Subscribe to
              <br />
              <span>our newsletter</span>
            </h1>

            <div className="newsletter__texts--left">
              <p>
                Get the latest <span>free</span> event conference notification and a
                reminder of upcoming speakers.
              </p>
            </div>
          </div>

          <form className="newsletter__form">
            <input type="email" placeholder="Your email address" />

            <label className="newsletter__form--checkbox">
              <input type="checkbox" />
              <span />

              <p>
                I agree with
                <Link href="/"> Privacy Policy</Link> and
                <Link href="/"> Terms of Conditions</Link>
              </p>
            </label>

            <button>Subscribe</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__cointainer">
          <section className="footer__top">
            <Image src="/logo-footer.svg" alt="logo" width="232" height="47" />

            <div className="footer__top--lists">
              <ul>
                <h3>Product</h3>

                <li>
                  <Link href="/">Deploy</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>

              <ul>
                <h3>Company</h3>

                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Industries</Link>
                </li>
                <li>
                  <Link href="/">How we work</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
              </ul>

              <ul className="footer__top--lists--third">
                <h3>Support</h3>

                <li>
                  <Link href="/">Terms</Link>
                </li>
                <li>
                  <Link href="/">Privacy</Link>
                </li>
                <li>
                  <Link href="/">FAQs</Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="footer__bottom">
            <p>Bytelight. © 2023. All Rights Reserved.</p>
            <div className="footer__bottom--media">
              <Link href="/">
                <Image src="/instagram.svg" alt="instagram" width="48" height="48" />
              </Link>
              <Link href="/">
                <Image src="/facebook.svg" alt="facebook" width="48" height="48" />
              </Link>
              <Link href="/">
                <Image src="/twitter.svg" alt="twitter" width="48" height="48" />
              </Link>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}
