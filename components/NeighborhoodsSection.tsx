import { translations } from '@/lib/translations'

export default function NeighborhoodsSection() {
  const t = translations

  return (
    <section id="committees" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            {t.neighborhoods.title}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
            {t.neighborhoods.description}
          </p>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">
              {t.neighborhoods.impact}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.neighborhoods.impactText}
            </p>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md border-2 border-primary-200">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              {t.neighborhoods.loginPrompt}
            </h3>
            <div className="text-center">
              <a
                href="/login"
                className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                {t.neighborhoods.loginButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
