import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('title')}</h2>
        <p className="text-lg text-gray-500 leading-relaxed">{t('description')}</p>
      </div>
    </section>
  );
}
