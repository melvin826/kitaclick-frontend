import Link from 'next/link'
export default function LiveEventCard({event}:{event:any}){ return (<div className='bg-white p-4 rounded shadow'><h3 className='font-semibold'>{event.title}</h3><p className='text-sm text-gray-500'>Starts {event.startAt}</p><div className='mt-3'><Link href={'/live/'+event.id} className='px-3 py-1 bg-accent text-white rounded'>Open</Link></div></div>) }
