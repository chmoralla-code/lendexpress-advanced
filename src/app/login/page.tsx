'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Special check for admin
    if (email === 'admin' && password === 'admin1234') {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/admin');
      return;
    }

    // Simulate user login (for demo purposes)
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('userRole', 'user');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
      return;
    }

    setError('Invalid email or password. Use admin/admin1234 for testing.');
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2>Welcome Back</h2>
        <p>Login to manage your loans</p>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email or Username</label>
            <input
              id="email"
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className={styles.footer}>
          Don't have an account? <Link href="/register">Apply Now</Link>
        </div>
      </div>
    </div>
  );
}
