import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Interior.module.css';
import InteriorNav from '../components/InteriorNav';

export default function InteriorsPage() {
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <div className={styles.container}>
        <InteriorNav />
        <div className={styles.main}>
          <div className={styles.textDiv}>
            <h2>Modern Interior</h2>
            <p>
              A full-service residential & commercial interior design and
              staging company offering professional organizing & eco-services.
            </p>
            <button>{'Read more ->'}</button>
          </div>

          <div className={styles.imgDiv}>
            <Image
              src="/interiorPics/photo1.png"
              height="879"
              width="1231"
              alt="interior"
            />
            <div className={styles.authorDiv}>
              <div className={styles.author}>
                <Image
                  src="/interiorPics/photo2.png"
                  height="50"
                  width="50"
                  alt="author"
                />
                <div className={styles.authorDetails}>
                  <p>Aliza Webber</p>
                  <p>Interior designer</p>
                </div>
              </div>
              <h5>Designed in 2020 by Aliza Webber</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const globalStyle = `
body {
    background-color: #181719;
}`;
