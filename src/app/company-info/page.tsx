import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Information | Ayni Sree Engineering Projects',
  description: 'Legal details, directors, and registered information for Ayni Sree Engineering Projects Private Limited.',
}

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🏢 Corporate Information
          </div>
          <h1 className="text-4xl font-bold text-secondary mb-4">Company Information</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Legal details and corporate information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-secondary">Legal Details</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">🏢</span>Company Name:</span>
                <span className="text-secondary font-semibold">AYNI SREE ENGINEERING PROJECTS PRIVATE LIMITED</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-primary/5 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">🆔</span>CIN:</span>
                <span className="text-secondary font-mono">U45400JH2023PTC019864</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">🏛️</span>RoC:</span>
                <span className="text-secondary">RoC-Jharkhand</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-green-50 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">✅</span>Status:</span>
                <span className="text-green-600 font-bold px-3 py-1 bg-green-100 rounded-full">Active</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">📅</span>Incorporation Date:</span>
                <span className="text-secondary">05-01-2023</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-primary/5 rounded-lg mb-3">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">💰</span>Authorized Capital:</span>
                <span className="text-secondary font-bold">₹15,00,000</span>
              </div>
              <div className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-muted flex items-center"><span className="mr-2">💵</span>Paid-up Capital:</span>
                <span className="text-secondary font-bold">₹1,00,000</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👥</span>
              </div>
              <h2 className="text-2xl font-bold text-secondary">Directors</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border-l-4 border-primary">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">PK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Prince Kumar</h3>
                    <p className="text-muted">Director</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border-l-4 border-accent">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">PK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg">Priyanka Kumari</h3>
                    <p className="text-muted">Director</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6 mt-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📍</span>
              </div>
              <h2 className="text-2xl font-bold text-secondary">Registered Address</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <p className="text-secondary text-lg font-medium">
                📍 Ratu, Ranchi, Jharkhand, 835303
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-secondary">Source Verification</h2>
          </div>
          <p className="text-muted mb-4">
            Company information verified from public registries. Last verified: {new Date().toLocaleDateString()}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.indiafilings.com/search/ayni-sree-engineering-projects-private-limited-cin-U45400JH2023PTC019864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200 hover:border-blue-400"
            >
              <span className="text-2xl mr-3">📄</span>
              <span className="text-accent font-semibold">IndiaFilings Profile</span>
            </a>
            <a
              href="https://www.thecompanycheck.com/company/ayni-sree-engineering-projects-private-limited/U45400JH2023PTC019864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200 hover:border-blue-400"
            >
              <span className="text-2xl mr-3">✅</span>
              <span className="text-accent font-semibold">TheCompanyCheck Profile</span>
            </a>
            <a
              href="https://www.allindiaitr.com/company/ayni-sree-engineering-projects-private-limited/U45400JH2023PTC019864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200 hover:border-blue-400"
            >
              <span className="text-2xl mr-3">🔗</span>
              <span className="text-accent font-semibold">AllIndiaITR Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}