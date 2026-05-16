import React from 'react';
import './App.css';

const PrizeBanner = () => (
  <div className="announcement-banner">
    <div className="banner-content">
      <h2 className="prize-title">Announcing a $10,000 Security Prize</h2>
      <p className="prize-desc">
        We believe in cryptographic truth, not corporate promises. Scan the internet, consult AI, or ask industry experts. If you can find a more secure model for Bitcoin-backed lending than Valuete’s 2-of-3 multisig architecture—one completely devoid of a single point of failure—you win <span className="highlight-text">$10,000 USD paid in Bitcoin 🚀</span>
      </p>
    </div>
  </div>
);

const SignupBanner = () => (
  <div className="signup-banner">
    <span className="sparkle">✨</span>
    <span className="signup-text">Sign-up, set up your Multisig wallet, and <span className="highlight-text">Earn ₹250 in Bitcoin</span> instantly.</span>
    <span className="sparkle">✨</span>
  </div>
);

const Header = () => (
  <div className="navbar-wrapper">
    <header className="navbar">
      <div className="nav-content">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Valuete Logo" className="logo-img" onError={(e) => { e.target.onerror = null; e.target.src = 'https://valuete.in/img/logo.png'; }} />
          <span className="logo-text">VALUETE</span>
        </a>
        <div className="nav-actions">
          <a href="https://app.valuete.in/signin" className="btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  </div>
);

const HomeContent = () => (
  <>
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <SignupBanner />
          <h1 className="hero-title">
            The World's Most Secure Bitcoin-Backed Lending Platform
          </h1>
          <p className="hero-subtitle">
            Unlock fiat liquidity without surrendering your private keys. Borrow against your Bitcoin via institutional-grade 2-of-3 multisig vaults, or deploy capital to earn premium, risk-adjusted yields. Zero custodial risk. Total transparency.
          </p>
          <div className="hero-buttons">
            <a href="https://app.valuete.in/signin" className="btn-solid">Start Borrowing</a>
            <a href="https://app.valuete.in/signin" className="btn-outline">Start Lending</a>
          </div>
        </div>

        <PrizeBanner />
      </div>
    </section>

    <section className="solution-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-purple">The Problem & Our Solution</span>
          <h2>Custodial Lending is Broken. We Fixed It.</h2>
          <p className="section-desc">
            The era of "not your keys, not your coins" being ignored is over. Traditional crypto lenders take full custody of your assets, rehypothecate them, and expose you to catastrophic counterparty risk. Valuete introduces a paradigm shift: True peer-to-peer lending facilitated by unbreakable cryptography.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper blue">🔐</div>
            <h3>2-of-3 Multisig Vaults</h3>
            <p>Your collateral is locked in a unique, on-chain smart contract vault. Three keys exist: Yours, the Lender's, and Valuete's. Two keys are required to move funds. You retain a key, meaning your Bitcoin cannot be moved, lent out, or lost by Valuete.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper green">💸</div>
            <h3>Tax-Optimized Liquidity</h3>
            <p>Selling your Bitcoin triggers capital gains tax and removes you from future upside. By borrowing against it, you access immediate INR liquidity directly to your bank account while your Bitcoin remains untouched, continuing to appreciate in your vault.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper purple">⚖️</div>
            <h3>Platform Arbitration</h3>
            <p>To ensure fairness, the third key is held securely by the Valuete platform. Valuete acts as a neutral arbitrator and cannot access the funds alone. The key is only used to facilitate transactions when both parties agree, or to resolve disputes and process liquidations, protecting the capital of both borrower and lender.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="process-section bg-secondary">
      <div className="container">
        <div className="process-wrapper">
          <div className="process-text">
            <span className="badge badge-green">The Process</span>
            <h2>Seamless. Transparent. Instant.</h2>
            <p>Experience a frictionless lending protocol designed for sophisticated investors who demand speed without compromising on absolute security.</p>

            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Lock Collateral</h4>
                  <p>Deposit Bitcoin into your dedicated, transparent 2-of-3 multisig vault. Verify your holdings on-chain instantly.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Receive Funds</h4>
                  <p>Fiat liquidity is wired directly to your verified bank account. No waiting periods, no opaque approval processes.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Repay & Unlock</h4>
                  <p>Repay your loan principal and interest at your convenience. Once settled, your collateral is immediately unlocked and returned to your complete control.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="process-visual">
            <div className="glass-panel">
              <h3>The Marketplace</h3>
              <p className="panel-desc">Valuete acts as the ultimate trustless intermediary connecting two vital market participants.</p>

              <div className="market-participants">
                <div className="participant">
                  <h4>For Borrowers</h4>
                  <ul>
                    <li>✓ No Credit Checks</li>
                    <li>✓ Zero Rehypothecation</li>
                    <li>✓ Retain BTC Upside</li>
                  </ul>
                </div>
                <div className="divider"></div>
                <div className="participant">
                  <h4>For Lenders</h4>
                  <ul>
                    <li>✓ Overcollateralized Loans</li>
                    <li>✓ Verifiable On-Chain Assets</li>
                    <li>✓ Premium Fixed Yields</li>
                  </ul>
                </div>
              </div>
              <a href="https://app.valuete.in/signin" className="btn-primary w-full text-center mt-4">Enter the Marketplace</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const VTokensContent = () => (
  <>
    <section id="vtokens" className="vtokens-section">
    <div className="container">
      <div className="vtokens-hero">
        <div className="vtokens-text">
          <span className="badge badge-cyan">Valuete Rewards Ecosystem</span>
          <h2>V-Tokens:<br />Aligning Incentives, Maximizing Wealth.</h2>
          <p>
            We believe in enriching our community, not extracting from it. V-Tokens are the proprietary reward mechanism of the Valuete platform. Designed to heavily subsidize your borrowing costs, V-Tokens are earned through your organic platform activity and act as direct purchasing power against origination fees.
          </p>
          <ul className="benefits-list">
            <li>
              <span className="emoji">💰</span>
              <span className="benefit-text"><strong>Earn Passively:</strong> Accumulate wealth simply by setting up your wallet, taking loans, and referring peers.</span>
            </li>
            <li>
              <span className="emoji">📉</span>
              <span className="benefit-text"><strong>Drastically Slash Fees:</strong> Redeem your V-Tokens to pay up to 50% of your loan origination costs, saving you thousands.</span>
            </li>
            <li>
              <span className="emoji">🔄</span>
              <span className="benefit-text"><strong>Peer-to-Peer Transferable:</strong> Liquidate or share your rewards by transferring them to any KYC-verified user within the Valuete network.</span>
            </li>
            <li>
              <span className="emoji">⭐</span>
              <span className="benefit-text"><strong>Unlock Premium Features:</strong> Hold V-Tokens to gain access to exclusive platform features and advanced lending tools within the Valuete ecosystem.</span>
            </li>
          </ul>
        </div>
        <div className="vtokens-visual">
          <div className="visual-card">
            <div className="visual-emoji">💎</div>
            <h3>100 V-Tokens</h3>
            <p className="equals-text">= ₹1 Off Fees</p>
          </div>
        </div>
      </div>

      <div className="early-user-card" style={{ textAlign: 'center', margin: '0 auto 80px', padding: '40px', background: 'linear-gradient(135deg, rgba(247,147,26,0.05) 0%, rgba(255,187,0,0.05) 100%)', border: '1px solid rgba(247,147,26,0.2)', borderRadius: '24px', maxWidth: '800px' }}>
        <span className="badge badge-cyan" style={{ marginBottom: '16px' }}>Limited Opportunity</span>
        <h3 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Exclusive Early Adopter Multiplier</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: '0 auto 24px', maxWidth: '650px' }}>
          The V-Tokens program features aggressive bonus tiers for the first 5,000 borrowers. Early adopters earn massive multipliers on top of base platform rewards.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: '600' }}>First 10 Users: 200% Extra</span>
          <span style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: '600' }}>Next 90: 100% Extra</span>
          <span style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: '600' }}>Next 400: 50% Extra</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '16px' }}>*Tiers continue down to the 5,000th user. Secure your spot in the upper echelons today.</p>
      </div>

      <div className="example-section">
        <h2>The Mathematical Advantage</h2>
        <div className="table-card">
          <h3>Real-World Loan Application</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Transaction Ledger</th>
                  <th className="align-right">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capital Borrowed</td>
                  <td className="align-right">₹5,00,000</td>
                </tr>
                <tr>
                  <td>Standard Origination Fee (2%)</td>
                  <td className="align-right">₹10,000</td>
                </tr>
                <tr>
                  <td><strong>V-Token Subsidy (50% max)</strong></td>
                  <td className="align-right text-green">-₹5,000 <br /><span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>(Redeeming 5,00,000 V-Tokens)</span></td>
                </tr>
                <tr>
                  <td>Remaining Fiat Obligation</td>
                  <td className="align-right">₹5,000</td>
                </tr>
                <tr className="total-row">
                  <td>Your Final Out-of-Pocket Cost</td>
                  <td className="align-right text-green">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-note">By leveraging the ecosystem, you instantly cut your capital costs in half—and taking this very loan generates a fresh yield of V-Tokens for your next transaction.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="contact-section" style={{ padding: '100px 0', background: 'var(--bg-secondary)', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
    <div className="container">
      <span className="badge badge-green">Let's Start</span>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Welcome to the World of Private, Bitcoin-Backed Lending</h2>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 32px' }}>
        Sign up for free and experience secure, decentralized financial tools with no borders and no limits. Want a personalized walkthrough? Book a call with our experts.
      </p>
      <a href="https://valuete.in/contact-us" className="btn-solid" style={{ background: '#2563eb', color: '#ffffff' }}>Book Your Free Strategy Call</a>
    </div>
  </section>
</>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-logo">
        <a href="/" className="logo">
          <span className="logo-text">VALUETE</span>
        </a>
      </div>
      <p className="footer-desc">The industry standard in non-custodial Bitcoin lending. 2-of-3 Multisig technology delivering unmatched security, transparency, and freedom for sophisticated investors.</p>
      <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '24px 0' }}>
        <a href="https://app.valuete.in/signin" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Platform Login</a>
        <a href="https://valuete.in/terms-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms & Conditions</a>
        <a href="https://valuete.in/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
      </div>
      <div className="footer-copy">Copyright © Valuete – Built by Bitcoiners for Bitcoiners</div>
      <p className="footer-disclaimer">
        <strong>Disclaimer:</strong> Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <HomeContent />
        <VTokensContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
