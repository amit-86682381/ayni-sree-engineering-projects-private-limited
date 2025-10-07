import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - AYNI SREE ENGINEERING PROJECTS',
  description: 'Learn about AYNI SREE ENGINEERING PROJECTS - Jharkhand\'s premier construction company with expertise in civil engineering and infrastructure development.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="construction-bg min-h-[60vh] flex items-center justify-center text-white relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Building Jharkhand's future with engineering excellence and unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-800">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Established in January 2023, AYNI SREE ENGINEERING PROJECTS PRIVATE LIMITED has quickly 
                emerged as one of Jharkhand's most trusted construction companies. Our journey began with 
                a simple vision: to deliver world-class construction services that exceed expectations.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With our headquarters in Ranchi, we have successfully completed numerous projects across 
                Jharkhand, earning a reputation for technical excellence, timely delivery, and 
                uncompromising quality standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹15L</div>
                  <div className="text-slate-600">Authorized Capital</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">₹1L</div>
                  <div className="text-slate-600">Paid-up Capital</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction Site" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver exceptional construction and engineering services that exceed client expectations 
                while maintaining the highest standards of safety, quality, and environmental responsibility. 
                We are committed to building lasting relationships and contributing to the development of 
                Jharkhand's infrastructure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the leading construction company in Eastern India, recognized for innovation, 
                sustainability, and excellence in project delivery. We envision a future where our 
                constructions stand as landmarks of quality and our company serves as a benchmark 
                for the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in construction and engineering
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">PK</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Prince Kumar</h3>
              <p className="text-orange-600 font-semibold mb-4">Director</p>
              <p className="text-slate-600">
                Visionary leader with extensive experience in construction management and business development.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">PK</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Priyanka Kumari</h3>
              <p className="text-orange-600 font-semibold mb-4">Director</p>
              <p className="text-slate-600">
                Strategic leader focused on operational excellence and quality assurance in all projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">Striving for perfection in every project we undertake</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">Honest, transparent, and ethical in all our dealings</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">Embracing new technologies and construction methods</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Safety</h3>
              <p className="text-gray-300">Prioritizing safety in every aspect of our operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the difference that comes with working with Jharkhand's most trusted construction company
          </p>
          <Link href="/contact" className="btn-secondary text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}