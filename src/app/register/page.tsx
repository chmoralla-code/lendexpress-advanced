'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';
import { supabase } from '@/lib/supabase';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
    employment: '',
    income: ''
  });
  const router = useRouter();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Submit the loan application to Supabase
      // Note: In a real app, you would handle Auth first, but this demonstrates the data flow
      const { data, error: sbError } = await supabase
        .from('loans')
        .insert([
          {
            amount: parseFloat(formData.amount),
            term_months: 24, // default for demo
            interest_rate: 8.5, // default for demo
            monthly_payment: (parseFloat(formData.amount) * (8.5 / 100 / 12)) / (1 - Math.pow(1 + 8.5 / 100 / 12, -24)),
            status: 'pending'
          }
        ]);

      if (sbError) throw sbError;

      // 2. Simulate login state
      localStorage.setItem('userRole', 'user');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setError(err.message || 'An error occurred during submission.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.progress}>
          <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1</div>
          <div className={styles.line}></div>
          <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2</div>
          <div className={styles.line}></div>
          <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3</div>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {step === 1 && 'Loan Details'}
          {step === 2 && 'Personal Information'}
          {step === 3 && 'Financial Information'}
        </h2>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.formGroup}>
                <label>How much do you need?</label>
                <input
                  type="number"
                  placeholder="e.g. 5000"
                  className="input"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Loan Purpose</label>
                <select
                  className="input"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  required
                >
                  <option value="">Select purpose</option>
                  <option value="debt">Debt Consolidation</option>
                  <option value="home">Home Improvement</option>
                  <option value="medical">Medical Expenses</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="button" onClick={handleNext} className="btn btn-primary" style={{ width: '100%' }}>Next Step</button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="input"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="input"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  className="input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flex: 1 }}>Back</button>
                <button type="button" onClick={handleNext} className="btn btn-primary" style={{ flex: 2 }}>Next Step</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <div className={styles.formGroup}>
                <label>Employment Status</label>
                <select
                  className="input"
                  value={formData.employment}
                  onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                  required
                >
                  <option value="">Select status</option>
                  <option value="full">Full-time</option>
                  <option value="part">Part-time</option>
                  <option value="self">Self-employed</option>
                  <option value="none">Unemployed</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Monthly Income ($)</label>
                <input
                  type="number"
                  className="input"
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flex: 1 }}>Back</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }} disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
