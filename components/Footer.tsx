import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-gray-900">{t('company')}</span>
        <span className="text-sm text-gray-400">
          © {new Date().getFullYear()} {t('company')}. {t('rights')}
        </span>
      </div>
    </footer>
  );
}
