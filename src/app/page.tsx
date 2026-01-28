import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { VehicleCardsList } from '@/features/VehicleCards';
import styles from './page.module.css';

const breadcrumbs = [
  { label: 'Главная', href: '/' },
  { label: 'Каталоги и прайс-листы' },
];

export default function PriceListsPage() {
  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <main className={styles.main}>
        <VehicleCardsList />
      </main>
      <Footer />
    </>
  );
}
