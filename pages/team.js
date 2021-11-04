import Image from 'next/image';
import styles from '../styles/Team.module.css';

export default function TeamPage() {
  const images = [];
  const roles = [
    'Developer',
    'Developer',
    'Teach Lead',
    'Technician',
    'Backend Developer',
    'Coffee Guy',
  ];
  const names = ['Richard', 'Augustina', 'Laslo', 'Liz', 'Schlomo', 'Cas'];

  const renderImages = () => {
    for (let i = 1; i <= 6; i++) {
      images.push(
        <div key={i}>
          <div className={`${styles.imgWrapper} ${`img${i}`}`}>
            <Image
              src={`/photo${i}.png`}
              width={476}
              height={682}
              alt="member"
            />

            <p className={styles.role}>{roles[i - 1]}</p>
          </div>
          <p className={styles.name}>{names[i - 1]}</p>
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
