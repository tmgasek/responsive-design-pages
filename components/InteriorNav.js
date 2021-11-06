import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import styles from '../styles/InteriorNavbar.module.css';

export default function InteriorNav() {
  const [isOpen, setIsOpen] = useState(false);

  const hamStyle =
    isOpen === false
      ? styles.hamburger
      : styles.hamburger + ' ' + styles.active;

  const menuStyle =
    isOpen === false ? styles.menu : styles.menu + ' ' + styles.active;

  const logoStyle =
    isOpen === false ? styles.logo : styles.logo + ' ' + styles.active;
  return (
    <>
      <nav className={styles.navbar}>
        <div className={logoStyle}>
          <Link href="#">
            <a>[THIS INTERIOR]</a>
          </Link>
        </div>
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
          {isOpen ? <GrClose size={24} /> : <FiMenu size={24} />}
        </div>
      </nav>
    </>
  );
}

// https://github.com/ui-code-tv/myapp/blob/main/component/layout.js

//https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
