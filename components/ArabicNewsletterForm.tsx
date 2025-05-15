'use client'

import { useState } from 'react'

export default function ArabicNewsletterForm() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
  
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
  
      const result = await response.json()
  
      if (result.success) {
        setSuccess(true)
        setEmail('')
      } else {
        setError(result.message || 'فشل الاشتراك')
      }
    } catch (err) {
      setError('فشل الاتصال بالخادم')
      console.error('Error:', err)
    }
  }

  return (
    <div className="flex items-center justify-center pt-4">
      <div className="w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
          اشترك معنا لتصلك آخر المقالات
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-900"
          >
            اشتراك
          </button>
        </form>
        {success && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400 text-center">
            تم الاشتراك بنجاح! شكراً لاشتراكك.
          </p>
        )}
      </div>
    </div>
  )
} 