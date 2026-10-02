import './Footer.css'
import { BRAND_NAME, BRAND_NUMBER } from "../../../config.js"

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__brand">
        {BRAND_NAME}
        <span>{BRAND_NUMBER}</span>
      </a>
      <small>
        © {new Date().getFullYear()} {BRAND_NAME} {BRAND_NUMBER}. All rights reserved.
      </small>
    </footer>
  )
}
