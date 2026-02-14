import { translations } from '@/lib/translations'

export default function AboutSection() {
  const t = translations

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">
                {t.about.mission}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-600">
                {t.about.goals}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {t.about.goalsList.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary-500 mr-2">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">
              {t.about.benefits}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {t.about.benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
