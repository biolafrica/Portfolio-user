import formatDate from '@/app/utils/common/fomatDate';
import SectionHeader from '../common/sectionHeader';
import Background from '../common/background';

export default function BlogSection ({blogPosts}){
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">

      <Background/>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subheading="From the blog"
          content="Learn how to grow your business with our expert advice."
        />

        <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-56 sm:px-0 md:px-20 lg:px-0 lg:grid-cols-3 gap-6 lg:gap-8">

          {blogPosts.map((post) => (

            <article 
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border duration-300 cursor-pointer"
            >
              <div className="relative h-[400px] md:h-64 lg:h-[450px] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
                  
                  <a href={`/blog/${post.id}`} className="text-lg font-bold leading-tight group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </a>

                </div>

              </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


