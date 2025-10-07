import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Ayni Sree Engineering Projects',
  description: 'Portfolio of civil construction and engineering projects by Ayni Sree Engineering Projects Private Limited.',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Residential Complex Development',
      category: 'Building Construction',
      description: 'Multi-story residential complex with modern amenities and sustainable design.',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Highway Infrastructure Project',
      category: 'Road Works',
      description: 'Construction of highway infrastructure including bridges and drainage systems.',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Commercial Building MEP',
      category: 'MEP Installation',
      description: 'Complete mechanical, electrical, and plumbing installation for commercial complex.',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Our Projects</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Showcasing our expertise in civil construction, building projects, and engineering solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-muted">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted mb-6">
              Contact us to discuss your construction and engineering requirements
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}