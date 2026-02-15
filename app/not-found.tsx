import Link from 'next/link'
import { translations } from '@/lib/translations'

export default function NotFound() {
  const t = translations

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Bogga lama helin
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Bogga aad raadinayso ma jiro ama waa la wareegay.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
        >
          Dib u noqo bogga hore
        </Link>
      </div>
    </div>
  )
}

