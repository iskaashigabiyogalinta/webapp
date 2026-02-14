import { translations } from '@/lib/translations'

export default function Hero() {
  const t = translations

  return (
    <section className="relative bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-95">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              {t.hero.cta}
            </a>
            <a
              href="/login"
              className="inline-block px-8 py-4 bg-secondary-600 text-white rounded-lg font-semibold text-lg hover:bg-secondary-700 transition-colors shadow-lg text-center"
            >
              {t.hero.login}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
