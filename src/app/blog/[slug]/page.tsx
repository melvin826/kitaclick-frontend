// Add static params for export mode
export async function generateStaticParams() {
  // Provide demo slugs for your blog posts
  return [
    { slug: "welcome-to-kitaclick" },
    { slug: "how-to-earn-online" },
    { slug: "dropshipping-success-stories" }
  ];
}

import { posts } from '@/data/mockBlog'
import { notFound } from 'next/navigation'
export default function Post({params}:{params:{slug:string}}){
  const post = posts.find(p=>p.slug===params.slug)
  if(!post) notFound()
  return (
    <article>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-600">{post.excerpt}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{__html:post.content}} />
    </article>
  )
}
