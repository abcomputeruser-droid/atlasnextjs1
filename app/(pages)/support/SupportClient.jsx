"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import styles from '../../../styles/pages/support.module.css'

export default function SupportClient() {
  const [toastVisible, setToastVisible] = useState(false)
  const [countdown, setCountdown] = useState(8)
  const [attachShow, setAttachShow] = useState(false)
  const [attachHint, setAttachHint] = useState('')
  const [formDone, setFormDone] = useState(false)
  const toastTimerRef = useRef(null)
  const loadedAtRef = useRef(Date.now())

  const HINTS = {
    warranty: '— proof of purchase or invoice (PDF, JPG, PNG · max 10 MB)',
    rma: '— proof of purchase, photos of the item, or invoice (PDF, JPG, PNG · max 10 MB)',
    technical: '— screenshots or photos of the issue (JPG, PNG, PDF · max 10 MB)',
  }

  function showToast() {
    setCountdown(8)
    setToastVisible(true)
    let rem = 8
    toastTimerRef.current = setInterval(() => {
      rem--
      setCountdown(rem)
      if (rem <= 0) dismissToast()
    }, 1000)
  }

  function dismissToast() {
    clearInterval(toastTimerRef.current)
    setToastVisible(false)
  }

  function handleTypeChange(e) {
    const val = e.target.value
    const show = val === 'rma' || val === 'warranty' || val === 'technical'
    setAttachShow(show)
    setAttachHint(show ? (HINTS[val] || '') : '')
    if (!show) {
      const f = document.getElementById('inq-attach')
      if (f) f.value = ''
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const trap = document.getElementById('inq-trap')
    if (trap && trap.value !== '') return
    if (Date.now() - loadedAtRef.current < 4000) return

    const RL_KEY = 'atl_inq_rl'
    const now = Date.now()
    const raw = localStorage.getItem(RL_KEY)
    let log = raw ? JSON.parse(raw) : []
    log = log.filter(t => now - t < 3600000)
    if (log.length >= 3) { alert('Too many submissions. Please wait an hour before trying again.'); return }
    log.push(now)
    localStorage.setItem(RL_KEY, JSON.stringify(log))

    if (!e.target.checkValidity()) { e.target.reportValidity(); return }

    const rcToken = typeof window !== 'undefined' && window.grecaptcha ? window.grecaptcha.getResponse() : ''
    const rcError = document.getElementById('recaptcha-error')
    if (!rcToken) { if (rcError) rcError.style.display = 'block'; return }
    if (rcError) rcError.style.display = 'none'

    const submitBtn = e.target.querySelector('[type="submit"]')
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…' }

    function clean(str) { return String(str).replace(/<[^>]*>/g, '').trim().slice(0, 2000) }

    function _d(s) { return atob(s) }
    const _sid = _d('c2VydmljZV9vdG9hem8z')
    const _tid = _d('dGVtcGxhdGVfM3ZwaXNtcA==')
    const _pk  = _d('bGZCUHB4TklMRXVuSjdld3I=')

    const payload = {
      to_email:     'abcomputerner@gmail.com',
      from_name:    clean(document.getElementById('inq-name').value),
      from_email:   clean(document.getElementById('inq-email').value),
      phone:        clean(document.getElementById('inq-phone').value),
      inquiry_type: clean(document.getElementById('inq-type').value),
      sku:          clean(document.getElementById('inq-sku').value),
      message:      clean(document.getElementById('inq-message').value),
      recaptcha:    rcToken,
    }

    if (window.emailjs) {
      window.emailjs.init({ publicKey: _pk })
      window.emailjs.send(_sid, _tid, payload)
        .then(() => {
          setFormDone(true)
          showToast()
        })
        .catch(() => {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit Inquiry' }
          if (window.grecaptcha) window.grecaptcha.reset()
          alert('Could not send your inquiry. Please try again or email support@atlas.com directly.')
        })
    }
  }

  const circumference = 2 * Math.PI * 9
  const progress = circumference * (1 - countdown / 8)

  return (
    <>
      <div className={`${styles.inqToast}${toastVisible ? ' ' + styles.inqToastVisible : ''}`} role="alert" aria-live="polite">
        <span className={styles.inqToastMsg}>&#10003; Inquiry submitted — our team will respond within 6 hours.</span>
        <span className={styles.inqToastTimer}>
          <svg className={styles.inqToastRing} viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="9" />
            <circle
              className={styles.progress}
              cx="11" cy="11" r="9"
              style={{ strokeDasharray: circumference, strokeDashoffset: progress }}
            />
          </svg>
          <span>{countdown}</span>s
        </span>
        <button className={styles.inqToastClose} onClick={dismissToast} aria-label="Dismiss">&#10005;</button>
      </div>
      <MotionBg />
      <Nav tagline="Support Center" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className="hero hero-single">
          <div className="container hero-single-inner">
            <div className="hero-text">
              <p className="eyebrow">Support</p>
              <h1>We are here to keep your build running.</h1>
              <p>Reach Atlas support for product help, warranty service, and order guidance.</p>
              <div className="hero-actions">
                <a className="cta" href="#contact">Contact Us</a>
                <Link className="cta ghost" href="/company">Company</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="section-title">Contact</div>
            <div className={styles.inquiryWrap}>
              <h3>Send an Inquiry</h3>
              <p className={styles.inquirySub}>Fill in your details and we will get back to you within 6 hours.</p>
              {!formDone ? (
                <form id="inquiryForm" onSubmit={handleSubmit} noValidate>
                  <div className={styles.inqRow}>
                    <div className={styles.inqField}>
                      <label htmlFor="inq-name">Full Name *</label>
                      <input type="text" id="inq-name" name="name" placeholder="Your full name" required />
                    </div>
                    <div className={styles.inqField}>
                      <label htmlFor="inq-phone">Phone Number</label>
                      <input type="tel" id="inq-phone" name="phone" placeholder="+880 ..." />
                    </div>
                    <div className={styles.inqField}>
                      <label htmlFor="inq-email">Email Address *</label>
                      <input type="email" id="inq-email" name="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className={styles.inqRow2}>
                    <div className={styles.inqField}>
                      <label htmlFor="inq-type">Inquiry Type *</label>
                      <select id="inq-type" name="type" required defaultValue="" onChange={handleTypeChange}>
                        <option value="" disabled>Select a topic</option>
                        <option value="warranty">Warranty Claim</option>
                        <option value="rma">RMA / Return</option>
                        <option value="product">Product Question</option>
                        <option value="order">Order &amp; Delivery Status</option>
                        <option value="sales">Bulk Order / Reseller</option>
                        <option value="drivers">Drivers</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={styles.inqField}>
                      <label htmlFor="inq-sku">Product SKU / Model (optional)</label>
                      <input type="text" id="inq-sku" name="sku" placeholder="e.g. AT22T, H81 V3 ..." />
                    </div>
                  </div>
                  {attachShow && (
                    <div className={`${styles.inqField} ${styles.inqFieldFull}`}>
                      <label htmlFor="inq-attach">Attach File <span style={{ fontWeight: 400, textTransform: 'none', fontSize: '0.78rem', color: 'var(--muted, #666)' }}>{attachHint}</span></label>
                      <input type="file" id="inq-attach" name="attachment" accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                  )}
                  <div className={`${styles.inqField} ${styles.inqFieldFull}`}>
                    <label htmlFor="inq-message">Message *</label>
                    <textarea id="inq-message" name="message" placeholder="Describe your issue, question, or request in detail..." required></textarea>
                  </div>
                  <div className={`${styles.inqField} ${styles.inqFieldFull}`} style={{ marginTop: '1rem' }}>
                    <div className="g-recaptcha" data-sitekey="6Lcq6cosAAAAAD4G976rcfipPihpU_Ia5pSa6-dm"></div>
                    <p id="recaptcha-error" style={{ display: 'none', marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--accent, #ff4d2d)', fontWeight: 600 }}>Please complete the reCAPTCHA challenge before submitting.</p>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                    <label htmlFor="inq-trap">Leave blank</label>
                    <input type="text" id="inq-trap" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className={styles.inqFooter}>
                    <p>* Required fields &nbsp;&middot;&nbsp; We respond within 6 hours on business days.</p>
                    <button className="cta" type="submit">Submit Inquiry</button>
                  </div>
                </form>
              ) : (
                <div className={styles.inqSuccess}>
                  &#10003; Inquiry submitted. Our team will contact you within 6 hours.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="location">
          <div className="container">
            <div className="section-title">Location</div>
            <div className="company-grid">
              <div className="company-content">
                <h2>AB Computer — Official Atlas Distributor</h2>
                <p>Atlas products are serviced and available through AB Computer, the official Atlas distributor in Bangladesh since 2020.</p>
                <ul className="company-list">
                  <li>Visit <a href="https://abcomputer.com.bd" target="_blank" rel="noopener noreferrer">abcomputer.com.bd</a> for location and hours</li>
                  <li>Authorized for warranty claims and RMA handling</li>
                  <li>Available for walk-in purchase and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section build" id="service">
          <div className="container build-grid">
            <div>
              <h2>Service and Warranty</h2>
              <p>We keep every product traceable with batch-level logs and service history.</p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="value">1&ndash;3 Yr</div>
                <div className="label">Warranty</div>
              </div>
              <div className="stat">
                <div className="value">6h</div>
                <div className="label">Initial response</div>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.policiesSection}`} id="policies">
          <div className={`${styles.policiesOrb} ${styles.policiesOrbA}`} aria-hidden="true"></div>
          <div className={`${styles.policiesOrb} ${styles.policiesOrbB}`} aria-hidden="true"></div>
          <div className="container">
            <div className="section-title">Support Policies</div>
            <div className="specs-table">
              <table>
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Warranty</td>
                    <td>1 to 3 year manufacturer warranty with proof of purchase.</td>
                  </tr>
                  <tr>
                    <td>RMA Process</td>
                    <td>Submit a ticket, receive an RMA number, then ship or visit the service desk.</td>
                  </tr>
                  <tr>
                    <td>Diagnostics</td>
                    <td>Initial diagnostics completed within 2 or 5 working days.</td>
                  </tr>
                  <tr>
                    <td>Replacement</td>
                    <td>Instant replacement on valid claim.</td>
                  </tr>
                  <tr>
                    <td>Support Articles</td>
                    <td>Quick start guides, BIOS updates, and troubleshooting checklists.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" />
      <Script src="/seo.js" strategy="afterInteractive" />
      <Script src="/image-optimizer.js" strategy="afterInteractive" />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  )
}
