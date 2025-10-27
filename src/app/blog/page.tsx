import Link from 'next/link'
import { posts } from '@/data/mockBlog'
export default function Blog(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="mt-4 space-y-3">
        {posts.map(p => <li key={p.slug}><Link href={'/blog/'+p.slug} className='text-blue-600'>{p.title}</Link></li>)}
      </ul>
    </div>
  )
}
