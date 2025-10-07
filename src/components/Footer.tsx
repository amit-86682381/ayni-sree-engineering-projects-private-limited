import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg bg-white p-1">
                <Image
                  src="/images/logo.png"
                  alt="Ayni Sree Engineering Projects logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold">AYNI SREE</div>
                <div className="text-orange-400 font-semibold">ENGINEERING PROJECTS</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Leading construction company in Jharkhand, delivering world-class civil engineering 
              and building construction services with uncompromising quality and precision.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">@</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-orange-400 transition-colors">Projects</Link></li>
              <li><Link href="/company-info" className="text-gray-300 hover:text-orange-400 transition-colors">Company Info</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-white mb-1">📍 Address</div>
                <p className="text-gray-300 text-sm">Ratu, Ranchi, Jharkhand 835303</p>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">🕒 Business Hours</div>
                <p className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">🏆 CIN</div>
                <p className="text-gray-300 text-sm">U45400JH2023PTC019864</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 AYNI SREE ENGINEERING PROJECTS PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/company-info" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/company-info" className="text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}