import { translations } from '@/lib/translations'

export default function WaterAgencySection() {
  const t = translations

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {t.waterAgency.title}
            </h2>
            <p className="text-xl text-primary-600 font-semibold mb-8">
              {t.waterAgency.subtitle}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.waterAgency.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-secondary-600">
              {t.waterAgency.role}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.waterAgency.roleText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
