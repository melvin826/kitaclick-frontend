import Link from 'next/link'
import { courses } from '@/data/mockCourses'
import CourseCard from '@/components/CourseCard'
import FeatureCard from '@/components/FeatureCard'

export default function Home(){
  return (
    <div>
      <section className="py-8">
        <h1 className="text-3xl font-bold">KitaClick</h1>
        <p className="mt-2 text-gray-600">Single super app frontend — demo</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <FeatureCard title="Academy" href="/academy"/>
          <FeatureCard title="Marketplace" href="/catalog"/>
          <FeatureCard title="Live Selling" href="/live"/>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Popular Courses</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {courses.map(c => <CourseCard key={c.slug} course={c} />)}
        </div>
      </section>
    </div>
  )
}
