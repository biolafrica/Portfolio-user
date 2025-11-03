"use client"
import { ArrowLeftCircleIcon, CalendarDateRangeIcon, ClockIcon} from "@heroicons/react/24/outline";
import SharePost from "./share";
import formatDate from "@/app/utils/common/fomatDate";
import Background from "./background";
import { insertImagesIntoSections, parseContent, renderSection } from "@/app/utils/common/blogModification";

export default function BlogDetailPage({ blog }){

  const sections = parseContent(blog.content);
  const contentWithImages = insertImagesIntoSections(sections, blog.images);


  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
 
        <Background/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeftCircleIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <header className="mb-8 md:mb-12">
          {/* Date and Read Time */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <CalendarDateRangeIcon className="w-4 h-4 mr-1.5" />
              <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
            </div>
            {blog.read && (
              <>
                <span>•</span>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1.5" />
                  <span>{blog.read} minute read</span>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title || 'Untitled Post'}
          </h1>

          {/* Author */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-lg mr-3">
                {blog.author ? blog.author.charAt(0).toUpperCase() : 'A'}
              </div>
              <div>
                <p className="font-medium text-gray-900">{blog.author || 'Abiodun Biobaku'}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
          
            <SharePost blog={blog} />
            
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {contentWithImages.map((section, index) => renderSection(section, index))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600">
              Thanks for reading! Share this article if you found it helpful.
            </p>

            <SharePost blog={blog} />

          </div>
        </footer>

      </article>

    </div>
  );
};