'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration and application
    localStorage.setItem('userRole', 'user');
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
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
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Submit Application</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
