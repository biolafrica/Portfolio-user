import formatDate from '@/app/utils/common/fomatDate';
import Link from 'next/link';
import Image from 'next/image';
import BlogGridLoading from '@/app/loading';
import { EmptyBlog } from '../static/empty';
import { getBlogs } from '@/app/utils/database/getTasks';


// Blog Grid
export default async function BlogSection() {
  const blogPosts = await getBlogs();
  if (!blogPosts || blogPosts.length === 0) {return (<EmptyBlog/>)}

  return (
    <div className="grid grid-cols-1 mt-12 sm:mt-16 lg:mt-56 sm:px-0 md:px-20 lg:px-0 lg:grid-cols-3 gap-6 lg:gap-8">
      {blogPosts.map((post, index) => (
        <Link 
          href={`/blog/${post.id}`}
          key={post.id}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border duration-300 cursor-pointer"
        >
          <article>
            <div className="relative h-[400px] md:h-64 lg:h-[450px] overflow-hidden">
              <Image 
                src={post.image || post.images?.[0]}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                priority={index < 3}
                quality={85}
              />

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
                
                <h2 className="text-lg font-bold leading-tight group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h2>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}



