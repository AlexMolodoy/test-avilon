'use client';

import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'award' | 'tank' | 'combined';
  className?: string;
}

export const Logo = ({ variant = 'award', className = '' }: LogoProps) => {

  if (variant === 'tank') {
    return (
      <div className={`${styles.tankLogo} ${className}`}>
        <Image
          src="/images/logo-tank.png"
          alt="Tank"
          width={36}
          height={46}
          className={styles.tankImage}
        />
      </div>
    );
  }

  if (variant === 'award') {
    return (
      <div className={`${styles.awardLogo} ${className}`}>
        <Image
          src="/images/award-logo.png"
          alt="Award"
          width={134}
          height={40}
          className={styles.awardImage}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.combined} ${className}`}>
      <Image
        src="/images/logo-avilon-white.png"
        alt="Tank"
        width={94}
        height={16}
        className={styles.combinedImage}
      />
    </div>
  );
};
