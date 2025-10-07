import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - AYNI SREE ENGINEERING PROJECTS',
  description: 'Comprehensive construction services including civil engineering, building construction, infrastructure development, and MEP installation in Jharkhand.',
}

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="services-bg min-h-[60vh] flex items-center justify-center text-white relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique project requirements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Civil Engineering */}
            <div className="service-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-3xl group-hover:text-white transition-colors duration-300">🏗️</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Civil Engineering</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our civil engineering services encompass comprehensive structural design, site analysis, 
                and innovative engineering solutions for complex infrastructure projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Structural Design</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Foundation Engineering</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Site Planning</li>
                </ul>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Structural Analysis</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Project Management</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Quality Assurance</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Building Construction */}
            <div className="service-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-3xl group-hover:text-white transition-colors duration-300">🏢</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Building Construction</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Complete building construction services from foundation to finishing, ensuring the highest 
                standards of quality, safety, and architectural excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Residential Buildings</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Commercial Complexes</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Industrial Structures</li>
                </ul>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Interior Finishing</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Renovation Works</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Maintenance Services</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Infrastructure Development */}
            <div className="service-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-3xl group-hover:text-white transition-colors duration-300">🛣️</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800">Infrastructure Development</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Large-scale infrastructure projects including road construction, utility installation, 
                and comprehensive site preparation for various development projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Road Construction</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Bridge Construction</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Drainage Systems</li>
                </ul>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Utility Installation</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Site Preparation</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Landscaping</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* MEP Installation */}
            <div className="service-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-3xl group-hover:text-white transition-colors duration-300">⚡</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800">MEP Installation</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive Mechanical, Electrical, and Plumbing (MEP) services ensuring efficient 
                and reliable building systems integration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Electrical Systems</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Plumbing Works</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>HVAC Systems</li>
                </ul>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Fire Safety Systems</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>Security Systems</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">✓</span>System Integration</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach ensuring quality delivery and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Consultation</h3>
              <p className="text-slate-600">Initial project discussion and requirement analysis</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Planning</h3>
              <p className="text-slate-600">Detailed project planning and design development</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Execution</h3>
              <p className="text-slate-600">Professional construction with quality monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Delivery</h3>
              <p className="text-slate-600">Final inspection and project handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="construction-bg section-padding text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Every project is unique. Let us create a customized solution that perfectly fits your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Discuss Your Project
            </Link>
            <Link href="/projects" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-slate-800">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}