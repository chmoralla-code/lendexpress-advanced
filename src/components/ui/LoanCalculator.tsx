'use client';

import { useState, useEffect } from 'react';
import styles from './LoanCalculator.module.css';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(24);
  const [interestRate] = useState(8.5); // 8.5% fixed for calculator
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const rate = interestRate / 100 / 12;
    const payment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    setMonthlyPayment(payment);
  }, [amount, months, interestRate]);

  return (
    <div className={styles.calculator}>
      <h3>Loan Calculator</h3>
      <div className={styles.inputGroup}>
        <div className={styles.labelRow}>
          <label>Loan Amount</label>
          <span>${amount.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className={styles.range}
        />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.labelRow}>
          <label>Loan Term</label>
          <span>{months} Months</span>
        </div>
        <input
          type="range"
          min="6"
          max="60"
          step="6"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className={styles.range}
        />
      </div>

      <div className={styles.results}>
        <div className={styles.resultItem}>
          <p>Monthly Payment</p>
          <h2 className={styles.payment}>${monthlyPayment.toFixed(2)}</h2>
        </div>
        <div className={styles.resultItem}>
          <p>Interest Rate</p>
          <p className={styles.value}>{interestRate}% APR</p>
        </div>
      </div>
      
      <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
        Get Started
      </button>
    </div>
  );
}
