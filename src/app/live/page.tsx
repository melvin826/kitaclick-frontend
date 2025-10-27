import LiveEventCard from '@/components/LiveEventCard'
import { liveEvents } from '@/data/mockLive'
export default function Live(){ return (<div><h1 className='text-2xl font-bold'>Live Selling</h1><div className='mt-4 grid md:grid-cols-3 gap-4'>{liveEvents.map(e=> <LiveEventCard key={e.id} event={e}/>)}</div></div>) }
