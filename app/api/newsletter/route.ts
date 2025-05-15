// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json(
      { success: false, message: 'البريد الإلكتروني مطلوب.' },
      { status: 400 }
    )
  }

  const BUTTONDOWN_API_TOKEN = process.env.buttondownAPIKey

  if (!BUTTONDOWN_API_TOKEN) {
    return NextResponse.json(
      { success: false, message: 'لم يتم تهيئة خدمة النشرة الإلكترونية.' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers ', {
      method: 'POST',
      headers: {
        Authorization: `Token ${BUTTONDOWN_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const data = await response.json()
      console.error('Buttondown API error:', data)
      return NextResponse.json(
        { success: false, message: data.detail?.[0]?.msg || 'حدث خطأ في المعالجة' },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error subscribing:', error)
    return NextResponse.json(
      { success: false, message: 'فشل الاتصال بخدمة النشرة.' },
      { status: 500 }
    )
  }
}