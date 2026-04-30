'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalLoans: 1250000,
    activeLoans: 45,
    pendingApps: 12,
    repaymentRate: 98.5
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('userRole');
    if (isLoggedIn !== 'true' || role !== 'admin') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Admin Panel</h3>
        </div>
        <nav className={styles.sidebarNav}>
          <button className={`${styles.navItem} ${styles.active}`}>Dashboard</button>
          <button className={styles.navItem}>Applications</button>
          <button className={styles.navItem}>Active Loans</button>
          <button className={styles.navItem}>Borrowers</button>
          <button className={styles.navItem}>Settings</button>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className="btn btn-secondary" style={{ width: '100%' }}>Logout</button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topHeader}>
          <h1>Welcome, Admin</h1>
          <div className={styles.date}>April 30, 2026</div>
        </header>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p>Total Disbursed</p>
            <h3>${stats.totalLoans.toLocaleString()}</h3>
          </div>
          <div className={styles.statCard}>
            <p>Active Loans</p>
            <h3>{stats.activeLoans}</h3>
          </div>
          <div className={styles.statCard}>
            <p>Pending Applications</p>
            <h3 style={{ color: 'var(--primary)' }}>{stats.pendingApps}</h3>
          </div>
          <div className={styles.statCard}>
            <p>Repayment Rate</p>
            <h3>{stats.repaymentRate}%</h3>
          </div>
        </section>

        <section className={styles.recentActivity}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
              <h2>Recent Applications</h2>
              <button className="btn btn-secondary">View All</button>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Borrower</th>
                  <th>Amount</th>
                  <th>Purpose</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>$5,000</td>
                  <td>Home Renovation</td>
                  <td>2026-04-29</td>
                  <td><span className={styles.badgePending}>Pending</span></td>
                  <td><button className={styles.actionBtn}>Review</button></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>$12,000</td>
                  <td>Debt Consolidation</td>
                  <td>2026-04-28</td>
                  <td><span className={styles.badgePending}>Pending</span></td>
                  <td><button className={styles.actionBtn}>Review</button></td>
                </tr>
                <tr>
                  <td>Mike Wilson</td>
                  <td>$2,500</td>
                  <td>Medical Expenses</td>
                  <td>2026-04-28</td>
                  <td><span className={styles.badgeApproved}>Approved</span></td>
                  <td><button className={styles.actionBtn}>Details</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
