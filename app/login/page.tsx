import { translations } from '@/lib/translations'
import Link from 'next/link'

export default function LoginPage() {
  const t = translations

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t.nav.login}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Gali akoonkaaga si aad u gasho nidaamka maamulka qaaraanka.
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Magaca Isticmaalaha
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Gali magaca isticmaalaha"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Furaha Sirta ah
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Gali furaha sirta ah"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
          >
            {t.nav.login}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-primary-600 hover:text-primary-700 text-sm"
          >
            ← Dib u noqo bogga hore
          </Link>
        </div>
      </div>
    </div>
  )
}

