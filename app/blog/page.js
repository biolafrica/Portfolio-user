import { Suspense } from "react";
import Background from "../components/common/background";
import SectionHeader from "../components/common/sectionHeader";
import BlogSection from "../components/sections/BlogSection"
import BlogGridLoading from "./loading";

export const metadata = {
  title: 'Blog',
  description: 'Full-stack web developer in Manchester & London, UK. Building scalable web applications with React, Next.js, and Node.js.',
}

export default function Blog() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <Background />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subheading="From the blog"
          content="Learn how to grow your business with our expert advice."
        />
        <Suspense fallback={<BlogGridLoading/>}>
        <BlogSection />
        </Suspense>
      </div>
    </section>
  );
}