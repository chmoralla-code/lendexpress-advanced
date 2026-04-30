import Link from 'next/link';
import styles from './page.module.css';
import LoanCalculator from '@/components/ui/LoanCalculator';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Financial Freedom, <span className={styles.highlight}>Simplified.</span>
            </h1>
            <p className={styles.description}>
              Get personal loans up to $50,000 with instant approval and funds in your account within 24 hours. No hidden fees, no paperwork.
            </p>
            <div className={styles.cta}>
              <Link href="/register" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                Check My Rate
              </Link>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>$1B+</h3>
                <p>Loans Funded</p>
              </div>
              <div className={styles.statItem}>
                <h3>500k+</h3>
                <p>Customers</p>
              </div>
            </div>
          </div>
          
          <div className={styles.calculatorWrapper}>
            <LoanCalculator />
          </div>
        </div>
      </div>
      
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose LendExpress?</h2>
          <div className={styles.featureGrid}>
            <div className="card">
              <h3>⚡ Instant Decision</h3>
              <p>Our AI-powered platform gives you a loan decision in seconds, not days.</p>
            </div>
            <div className="card">
              <h3>🔒 Secure & Private</h3>
              <p>We use bank-level encryption to keep your data safe and secure.</p>
            </div>
            <div className="card">
              <h3>📅 Flexible Terms</h3>
              <p>Choose repayment terms from 6 to 60 months that fit your budget.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
