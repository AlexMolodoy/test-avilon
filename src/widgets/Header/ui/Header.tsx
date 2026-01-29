'use client';

import { useState } from 'react';
import { Logo, LocationIcon, PhoneIcon } from '@/shared/ui';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  isHighlighted?: boolean;
}

const navItems: NavItem[] = [
  { label: 'МОДЕЛИ', href: '#' },
  { label: 'АВТО В НАЛИЧИИ', href: '#', isActive: true },
  { label: 'ТЕСТ ДРАЙВ', href: '#' },
  { label: 'СПЕЦПРЕДЛОЖЕНИЯ', href: '#', isHighlighted: true },
  { label: 'СЕРВИС', href: '#' },
  { label: 'О КОМПАНИИ', href: '#' },
  { label: 'КОНТАКТЫ', href: '#' },
];

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export const Header = ({ breadcrumbs }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logos}>
          <Logo variant="combined" />
          <Logo variant="award" />
        </div>
        <div className={styles.tankLogoWrapper}>
          <Logo variant="tank" />
        </div>
        <div className={styles.contacts}>
          <div className={styles.address}>
            <LocationIcon />
            <span>Москва, Волгоградский проспект, 41, к. 1</span>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            <a href="tel:+74954077800">+7 (495) 407-78-00</a>
          </div>
        </div>
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${styles.navLink} ${item.isActive ? styles.navLinkActive : ''
                  } ${item.isHighlighted ? styles.navLinkOrange : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileContacts}>
          <div className={styles.address}>
            <LocationIcon />
            <span>Москва, Волгоградский проспект, 41, к. 1</span>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            <a href="tel:+74954077800">+7 (495) 407-78-00</a>
          </div>
        </div>
      </nav>

      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map((item, index) => (
            <span key={item.label}>
              {item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className={styles.breadcrumbSeparator}>&gt;</span>
              )}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};
