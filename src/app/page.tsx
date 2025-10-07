import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-orange-500/20 text-orange-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/30">
              🏗️ Premier Construction Company Since 2023
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Building Excellence,
            <span className="block text-orange-400">Delivering Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
            AYNI SREE ENGINEERING PROJECTS - Your trusted partner for world-class civil construction, 
            infrastructure development, and engineering solutions across Jharkhand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Project
            </Link>
            <Link href="/projects" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-slate-800">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800">
                Engineering Excellence Since 2023
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AYNI SREE ENGINEERING PROJECTS PRIVATE LIMITED stands as Jharkhand's premier 
                construction company, delivering innovative solutions with uncompromising quality 
                and precision engineering.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">🏗️</div>
                    <div className="font-bold">Civil Engineering</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="font-bold">Construction</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">🛣️</div>
                    <div className="font-bold">Infrastructure</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-bold">MEP Systems</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold mb-1">Est. 2023</div>
                  <div className="text-orange-100">Building Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-bg section-padding text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive construction solutions backed by technical excellence and industry-leading standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Civil Engineering</h3>
              <p className="text-gray-200 mb-6">
                Advanced structural design, site planning, and innovative engineering solutions for complex projects.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Structural Analysis & Design</li>
                <li>• Foundation Engineering</li>
                <li>• Site Planning & Surveying</li>
              </ul>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Building Construction</h3>
              <p className="text-gray-200 mb-6">
                Complete construction services from foundation to finishing with rigorous quality assurance.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Residential Construction</li>
                <li>• Commercial Buildings</li>
                <li>• Interior Finishing</li>
              </ul>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛣️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure</h3>
              <p className="text-gray-200 mb-6">
                Large-scale infrastructure projects including roads, utilities, and site preparation.
              </p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Road Construction</li>
                <li>• Utility Installation</li>
                <li>• MEP Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-4">100+</div>
              <div className="text-gray-300 text-lg">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-4">100%</div>
              <div className="text-gray-300 text-lg">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-4">50+</div>
              <div className="text-gray-300 text-lg">Expert Team</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-4">24/7</div>
              <div className="text-gray-300 text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="construction-bg section-padding text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-200">
            Partner with Jharkhand's most trusted construction company. Get expert consultation, 
            transparent pricing, and guaranteed quality delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-slate-800">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}