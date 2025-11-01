
import Link from "next/link";
import SectionHeader from "../common/sectionHeader";
import Background from "../common/background";
import { LinkIcon } from "@heroicons/react/24/outline";

export default function ProjectsHomeSection({align, page}){

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
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        <div className={`${page=== "main" ? "pb-14" : ""}`}>
          <Background/>
          <SectionHeader
            heading={`${align === "center" ? "Project" : ""}`}
            subheading="Recent Projects"
            content="These projects represent successful partnerships with businesses across the UK and beyond. Each one solved a unique challenge."
            align={align}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 lg:mt-24">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <img src={`/images/${project.src}`} alt="brand icon" className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <Link 
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group/link"
              >
                <LinkIcon className="w-4 h-4 text-gray-400 group-hover/link:text-gray-600"/>
                <span className="font-medium">{project.url}</span>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

