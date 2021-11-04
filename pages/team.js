import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function TeamPage() {
  const renderImages = () => {
    let images = [];
    for (let i = 1; i <= 6; i++) {
      images.push(
        <div>
          <div className={`${styles.imgWrapper} ${`img${i}`}`} key={i}>
            <Image
              src={`/photo${i}.png`}
              width={476}
              height={682}
              alt="member"
            />

            <p className={styles.role}>Role</p>
          </div>
          <p className={styles.name}>Name</p>
        </div>
      );
    }

    return images;
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <h2>The creative crew</h2>
        <div>
          <h5>WHO WE ARE</h5>
          <p>
            We are a team of creatively diverse, driven, innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.grid}>{renderImages()}</div>
      </div>
    </div>
  );
}
