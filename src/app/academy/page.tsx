import { courses } from '@/data/mockCourses'
import CourseCard from '@/components/CourseCard'
export default function Academy(){ return (<div><h1 className='text-2xl font-bold'>Academy</h1><div className='mt-4 grid md:grid-cols-3 gap-4'>{courses.map(c=> <CourseCard key={c.slug} course={c}/>)}</div></div>) }
