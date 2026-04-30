import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            LendExpress
          </Link>
          <div className={styles.links}>
            <Link href="/products" className={styles.link}>Products</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.actions}>
            <Link href="/login" className="btn btn-secondary">Login</Link>
            <Link href="/register" className="btn btn-primary">Apply Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
