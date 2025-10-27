import { liveEvents } from '@/data/mockLive'
import { notFound } from 'next/navigation'
export default function LiveEvent({params}:{params:{eventId:string}}){
  const e = liveEvents.find(x=>x.id===params.eventId)
  if(!e) notFound()
  return (<div><h1 className='text-2xl font-bold'>{e.title}</h1><p className='mt-2 text-gray-600'>Starts: {e.startAt}</p><button className='mt-4 px-3 py-2 bg-accent text-white rounded'>Buy</button></div>)
}
