import { getBlogs } from "@/app/utils/database/getTasks";
import SectionHeader from "../common/sectionHeader"
import formatDate from "@/app/utils/common/fomatDate";
import Link from "next/link";
import CallToActionButton from "../common/callToActionButton";


export default async function Blog() {
  const posts = await getBlogs();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subheading="From the blog"
          content="Learn how to grow your business with our expert advice."
          align="left"
        />

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {formatDate(post.created_at)}
                </time>
                <Link
                  href={`/blog/${post.id}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.type}
                </Link>
                
              </div>

              
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.excerpt}</p>
              </div>

              <div className="relative mt-8 justify-self-end">
                <CallToActionButton className="pl-0" label="Continue reading →" href={`/blog/${post.id}`} variant="text" />
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
