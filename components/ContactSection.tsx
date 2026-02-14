import { translations } from '@/lib/translations'

export default function ContactSection() {
  const t = translations

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
            {t.contact.description}
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600">
              {t.contact.agency}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">🌐</span>
                <div>
                  <p className="font-semibold text-gray-800">{t.contact.website}</p>
                  <p className="text-gray-600">
                    <a href="https://iskaashigabiyogalintahargeysa.com" className="text-primary-600 hover:underline">
                      iskaashigabiyogalintahargeysa.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-800">{t.contact.email}</p>
                  <p className="text-gray-600">info@iskaashigabiyogalintahargeysa.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.966-.94 1.164-.17.199-.34.223-.63.075-.29-.15-1.223-.451-2.317-1.44-.857-.764-1.436-1.705-1.606-1.993-.17-.287-.018-.443.13-.586.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{t.contact.phone}</p>
                  <p className="text-gray-600">
                    <a 
                      href="https://wa.me/252637459344" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      +252 63 745 9344
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">{t.contact.address}</p>
                  <p className="text-gray-600">Hargeisa, Somaliland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
