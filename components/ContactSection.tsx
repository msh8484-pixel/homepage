import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('title')}</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">{t('name')}</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">{t('email')}</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">{t('message')}</label>
            <textarea
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
