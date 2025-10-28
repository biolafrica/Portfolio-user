import SectionHeader from "../common/sectionHeader";

export default function ProjectsHomeSection(){

  const projects = [
    {
      id: 1,
      name: '16Bags',
      description: 'A B2B marketplace for buying, selling, and leasing medium-scale businesses.',
      url: '16bags.com',
      src: '16bags_logo.png',
    },
    {
      id: 2,
      name: 'Eatup',
      description: 'A food delivery platform connecting customers with local restaurants for quick and easy meals.',
        url: 'eatup.ng',
      src: 'eatup_logo.png',
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
    
        <SectionHeader
          heading="Projects"
          subheading="Recent Projects"
          content="These projects represent successful partnerships with businesses across the UK and beyond. Each one solved a unique challenge."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 lg:mt-24">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <img src={`/images/${project.src}`} alt="brand icon" className="w-8 h-8" />
              </div>

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Link */}
              <a 
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group/link"
              >
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover/link:text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
                  />
                </svg>
                <span className="font-medium">{project.url}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

