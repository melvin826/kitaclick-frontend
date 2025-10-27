import { providers } from '@/data/mockProviders'
import { notFound } from 'next/navigation'
export default function Provider({params}:{params:{id:string}}){
  const p = providers.find(x=>x.id===params.id)
  if(!p) notFound()
  return (<div><h1 className='text-2xl font-bold'>{p.name}</h1><p className='mt-2 text-gray-600'>{p.specialty}</p><button className='mt-4 px-3 py-2 bg-primary text-white rounded'>Book</button></div>)
}
