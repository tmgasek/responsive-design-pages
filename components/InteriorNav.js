import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/Interior.module.css';
export default function InteriorNav() {
  const [isOpen, setIsOpen] = useState(false);

  const hamStyle =
    isOpen === false
      ? styles.hamburger
      : styles.hamburger + ' ' + styles.active;

  const menuStyle =
    isOpen === false ? styles.menu : styles.menu + ' ' + styles.active;
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="#">
          <a>[THIS INTERIOR]</a>
        </Link>

        <ul className={menuStyle}>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.navLink} onClick={() => setIsOpen(false)}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.navLink} onClick={() => setIsOpen(false)}>
                Collection
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.navLink} onClick={() => setIsOpen(false)}>
                About
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.navLink} onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <div className={hamStyle} onClick={() => setIsOpen(!isOpen)}>
          |||
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
}

// https://github.com/ui-code-tv/myapp/blob/main/component/layout.js

//https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
