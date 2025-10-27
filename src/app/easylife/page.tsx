import { providers } from '@/data/mockProviders'
import Link from 'next/link'
export default function EasyLife(){ return (<div><h1 className='text-2xl font-bold'>EasyLife</h1><ul className='mt-4'>{providers.map(p=> <li key={p.id}><Link href={'/provider/'+p.id} className='text-blue-600'>{p.name} — {p.specialty}</Link></li>)}</ul></div>) }
