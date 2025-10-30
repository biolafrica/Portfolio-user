import formatDate from '@/app/utils/common/fomatDate';
import SectionHeader from '../common/sectionHeader';

const BlogSection = ({blogPosts}) => {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subheading="From the blog"
          content="Learn how to grow your business with our expert advice."
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 mt-12 sm:mt-16 sm:px-0 md:px-20 lg:px-0 lg:grid-cols-3 gap-6 lg:gap-8">

          {blogPosts.map((post) => (

            <article 
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[400px] md:h-64 lg:h-[450px] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Date and Author */}
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-sm font-normal">
                      {formatDate(post.created_at)}
                    </time>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg"> 👤 </span>
                      <span className="text-sm font-normal">
                        Abiodun Biobaku
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold leading-tight group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h3>

                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
