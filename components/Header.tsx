'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl text-gray-900">
          그린텍코리아
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}#about`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t('about')}
          </Link>
          <Link href={`/${locale}#services`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t('services')}
          </Link>
          <Link href={`/${locale}#contact`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                locale === lang.code
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
