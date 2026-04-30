'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

export default function UserDashboard() {
  const router = useRouter();
  const [loan, setLoan] = useState({
    amount: 10000,
    balance: 8500,
    status: 'Active',
    nextPayment: '2026-05-15',
    nextAmount: 450
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    if (isLoggedIn !== 'true' || role !== 'user') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className="container" style={{ padding: '3rem 1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Welcome back, John!</h1>
          <p style={{ color: 'var(--muted)' }}>Manage your loans and payments here.</p>
        </div>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
      </header>

      <div className={styles.dashboardGrid}>
        <div className={styles.mainCol}>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Your Active Loan</h2>
            <div className={styles.loanSummary}>
              <div className={styles.summaryItem}>
                <p>Remaining Balance</p>
                <h3>${loan.balance.toLocaleString()}</h3>
              </div>
              <div className={styles.summaryItem}>
                <p>Status</p>
                <h3 style={{ color: '#166534' }}>{loan.status}</h3>
              </div>
              <div className={styles.summaryItem}>
                <p>Original Amount</p>
                <h3>${loan.amount.toLocaleString()}</h3>
              </div>
            </div>
            
            <div className={styles.nextPaymentBox}>
              <div className={styles.nextPaymentContent}>
                <div>
                  <p className={styles.nextPaymentLabel}>Next Payment Due</p>
                  <p className={styles.nextPaymentValue}>{loan.nextPayment} • ${loan.nextAmount}</p>
                </div>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Payment History</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-04-15</td>
                  <td>$450</td>
                  <td><span className={styles.badgeSuccess}>Paid</span></td>
                </tr>
                <tr>
                  <td>2026-03-15</td>
                  <td>$450</td>
                  <td><span className={styles.badgeSuccess}>Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <aside className={styles.sideCol}>
          <div className="card" style={{ background: 'var(--primary)', color: 'white', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Need more funds?</h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>Get an additional loan up to $20,000 with our special rate for existing customers.</p>
            <button className="btn btn-secondary" style={{ width: '100%', background: 'white', color: 'var(--primary)' }}>Apply Now</button>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1rem' }}>Support</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem' }}>Have questions about your loan? Our team is here to help.</p>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Support</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
