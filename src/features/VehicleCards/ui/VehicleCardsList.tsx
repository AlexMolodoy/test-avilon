'use client';

import { VehicleCard, vehicles } from '@/entities/Vehicle';
import styles from './VehicleCardsList.module.css';

export const VehicleCardsList = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Каталоги и прайс-листы</h1>
      <div className={styles.cards}>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
};
