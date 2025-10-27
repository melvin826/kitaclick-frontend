import { teachers } from '@/data/mockTeachers'
import { notFound } from 'next/navigation'
export default function Teacher({params}:{params:{id:string}}){
  const t = teachers.find(x=>x.id===params.id)
  if(!t) notFound()
  return (<div><h1 className='text-2xl font-bold'>{t.name}</h1><p className='mt-2 text-gray-600'>Language: {t.language}</p></div>)
}
