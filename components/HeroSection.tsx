import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
          {t('subtitle')}
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
