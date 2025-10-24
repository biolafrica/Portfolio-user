import React from 'react'

const projects = ["FamilyFund", "Unseal", "Phobia", "See all →"]
const companies = ["About", "Process", "Blog", "Contact us"]
const socials = ["Facebook", "Instagram", "GitHub", "Dribbble"]

export default function FooterSection() {
  return (
    <footer className="w-full bg-white ">

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Work Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Work</h3>

            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>

            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {company}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              
              {socials.map((social) => (
                <li key={social}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {social}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Office Address Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Office Address</h3>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              Studio Agency Inc.<br />
              123 Design Street<br />
              Creative District<br />
              New York, NY 10001<br />
              United States
            </address>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
            <span className="text-lg font-semibold text-gray-900">Studio.</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © Studio Agency Inc. 2025
          </div>
        </div>
      </div>
    </footer>
  );
};


