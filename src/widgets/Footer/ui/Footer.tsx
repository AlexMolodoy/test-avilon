'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterColumn {
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    links: [
      { label: 'Модели', href: '#' },
      { label: 'Авто в наличии', href: '#' },
      { label: 'О компании', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
  },
  {
    links: [
      { label: 'Тест-драйв', href: '#' },
      { label: 'Страхование', href: '#' },
      { label: 'Каталоги и прайсы', href: '#' },
      { label: 'Кредит и рассрочка', href: '#' },
      { label: 'Трейд-ин', href: '#' },
    ],
  },
  {
    links: [
      { label: 'Записаться на сервис', href: '#' },
      { label: 'Гарантия', href: '#' },
      { label: 'Сервисные акции', href: '#' },
      { label: 'Регламенты ТО', href: '#' },
    ],
  },
];

const socialLinks = [
  { src: '/whatsup.svg', href: '#', label: 'WhatsApp', width: 28, height: 32 },
  { src: '/telegram.svg', href: '#', label: 'Telegram', width: 28, height: 32 },
  { src: '/youtube.svg', href: '#', label: 'YouTube', width: 32, height: 32 },
  { src: '/dzen.svg', href: '#', label: 'Dzen', width: 32, height: 32 },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logos}>
            <Image
              src="/images/logo-tank.png"
              alt="TANK"
              width={36}
              height={46}
            />
            <Image
              src="/images/logo-avilon-white.png"
              alt="Авилон"
              width={94}
              height={16}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p className={styles.companyName}>АВИЛОН TANK </p>
              <p className={styles.infoText}>Официальный дилер TANK в Москве &copy; 2025</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoText}>ИНН: 7705133757</p>
              <p className={styles.infoText}>ОГРН: 1027700000151</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <nav className={styles.nav}>
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.navColumn}>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={social.width}
                  height={social.height}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
