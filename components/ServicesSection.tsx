import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">{t('title')}</h2>
        {/* 서비스 카드 — 추후 내용 채울 것 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-8 h-48 flex items-end">
              <span className="text-sm text-gray-300">서비스 {i} — 추후 작성</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
