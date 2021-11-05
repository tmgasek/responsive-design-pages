import Image from 'next/image';

import styles from '../styles/404.module.css';

export default function NotFound() {
  return (
    <>
      <h4 className={styles.title}>404 Not Found</h4>
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <Image
            src="/404pics/Scarecrow.png"
            alt="scarecrow"
            width={400}
            height={400}
          />
        </div>

        <div className={styles.textDiv}>
          <h1>I have some bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button
            className={styles.btnPrimary}
            onClick={() => console.log('Hello')}
          >
            Return home
          </button>
        </div>
      </div>
    </>
  );
}
