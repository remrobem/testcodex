import Link from 'next/link';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <Link href="/" className={styles.branding}>
            Church of the <span>Epiphany</span>
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" aria-current={isActive('/') ? 'page' : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/sunday-service"
                aria-current={isActive('/sunday-service') ? 'page' : undefined}
              >
                Sunday Service
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <div className="footerContent">
          <p className={styles.footerNote}>© {new Date().getFullYear()} Church of the Epiphany</p>
          <a href="mailto:info@epiphanychurch.org">info@epiphanychurch.org</a>
        </div>
      </footer>
    </div>
  );
}
