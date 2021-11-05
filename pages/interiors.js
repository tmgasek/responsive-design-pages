import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Interior.module.css';
import InteriorNav from '../components/InteriorNav';

export default function InteriorsPage() {
  return (
    <div>
      <InteriorNav />
      <div className={styles.textDiv}>
        <h2>Modern Interior</h2>
        <p>
          A full-service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <button>{'Read more ->'}</button>
      </div>

      <div className={styles.imgDiv}>
        <Image
          src="/interiorPics/photo1.png"
          height="586"
          width="821"
          alt="interior"
        />
      </div>

      <div className={styles.authorDiv}>
        <Image
          src="/interiorPics/photo2.png"
          height="72"
          width="72"
          alt="author"
        />
        <p>Aliza Webber</p>
        <p>Interior designer</p>
        <h5>Designed in 2020 by Aliza Webber</h5>
      </div>
    </div>
  );
}
