import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Gallery.module.css';

export default function GalleryPage() {
  const images = [];
  const renderImages = () => {
    for (let i = 1; i <= 6; i++) {
      images.push(
        <div className={`${styles.imgWrapper}`} key={i}>
          <Image
            src={`/gallery/photo${i}.png`}
            alt="photo"
            width="20"
            height="20"
            priority={true}
          />
        </div>
      );
    }
    return images;
  };

  return (
    <div className={styles.container}>
      <h2>Gallery page</h2>
      <div className={styles.gallery}>{renderImages()}</div>
    </div>
  );
}

// https://stackoverflow.com/questions/66353475/how-to-use-image-component-in-next-js-with-unknown-width-and-height
