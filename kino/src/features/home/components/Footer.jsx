import './Footer.css'
import { BRAND_NAME, BRAND_ACCENT } from "../../../config.js"

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__brand">
        {BRAND_NAME}
        <span>{BRAND_ACCENT}</span>
      </a>
      <small>
        © {new Date().getFullYear()} {BRAND_NAME} {BRAND_ACCENT}. All rights reserved.
      </small>
    </footer>
  )
}
