import { translations } from '@/lib/translations'

export default function HowItWorksSection() {
  const t = translations

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
            {t.howItWorks.description}
          </p>

          <div className="space-y-8">
            {t.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
