import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - AYNI SREE ENGINEERING PROJECTS',
  description: 'Get in touch with AYNI SREE ENGINEERING PROJECTS for your construction and engineering needs. Located in Ranchi, Jharkhand.',
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="construction-bg min-h-[50vh] flex items-center justify-center text-white relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our expert team today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-800">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ready to bring your construction vision to life? Our team of experts is here to help you 
                every step of the way. Contact us today for a free consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Our Address</h3>
                    <p className="text-slate-600">
                      Ratu, Ranchi, Jharkhand 835303<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Phone Number</h3>
                    <p className="text-slate-600">
                      +91-XXXXXXXXXX<br />
                      Available Mon-Sat, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Email Address</h3>
                    <p className="text-slate-600">
                      info@aynisree.com<br />
                      projects@aynisree.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2">Company Details</h3>
                    <p className="text-slate-600">
                      CIN: U45400JH2023PTC019864<br />
                      RoC: RoC-Jharkhand
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Business Hours</h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 text-slate-800">Send Us a Message</h2>
              <form action="/api/contact" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="civil-engineering">Civil Engineering</option>
                    <option value="building-construction">Building Construction</option>
                    <option value="infrastructure">Infrastructure Development</option>
                    <option value="mep">MEP Installation</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  Send Message
                </button>

                <p className="text-sm text-slate-500 text-center">
                  We'll get back to you within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Find Us</h2>
            <p className="text-xl text-slate-600">
              Visit our office in Ranchi, Jharkhand for in-person consultations
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Ratu, Ranchi, Jharkhand 835303</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}