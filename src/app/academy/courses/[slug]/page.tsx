import { courses } from '@/data/mockCourses'
import { notFound } from 'next/navigation'
export default function Course({params}:{params:{slug:string}}){
  const course = courses.find(c=>c.slug===params.slug)
  if(!course) notFound()
  return (<div><h1 className='text-2xl font-bold'>{course.title}</h1><p className='mt-2 text-gray-600'>{course.description}</p></div>)
}
