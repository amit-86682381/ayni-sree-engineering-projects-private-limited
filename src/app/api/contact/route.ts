import { NextRequest, NextResponse } from 'next/server'

const rateLimitMap = new Map()

export async function POST(request: NextRequest) {
  const ip = request.ip || 'unknown'
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute

  // Rate limiting
  if (rateLimitMap.has(ip)) {
    const lastRequest = rateLimitMap.get(ip)
    if (now - lastRequest < windowMs) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
  }
  rateLimitMap.set(ip, now)

  try {
    const body = await request.formData()
    const name = body.get('name') as string
    const email = body.get('email') as string
    const phone = body.get('phone') as string
    const company = body.get('company') as string
    const service = body.get('service') as string
    const message = body.get('message') as string

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
      ip
    })

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}