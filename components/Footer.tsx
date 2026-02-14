import { translations } from '@/lib/translations'

export default function Footer() {
  const t = translations

  return (
      <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            <a 
              href="https://iskaashigabiyogalintahargeysa.com" 
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              {t.footer.website}
            </a>
          </p>
          <p className="text-sm text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
