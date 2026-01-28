'use client';

import Image from 'next/image';
import { Vehicle } from '../../model';
import { Button } from '@/shared/ui';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.number}>{vehicle.model}</div>
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          width={747}
          height={420}
          className={styles.image}
          priority
        />

      </div>
      <div className={styles.buttons}>
        <Button variant="primary" href={vehicle.catalogUrl}>
          КАТАЛОГ
        </Button>
        <Button variant="outline" href={vehicle.priceListUrl}>
          ПРАЙС-ЛИСТ
        </Button>
      </div>
    </article>
  );
};
