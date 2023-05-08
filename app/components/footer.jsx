import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
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
  )
}
