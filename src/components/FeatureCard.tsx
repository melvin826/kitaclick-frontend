import Link from 'next/link'
export default function FeatureCard({title,href}:{title:string,href:string}){ return (<Link href={href} className='bg-white p-6 rounded shadow block'><h3 className='font-semibold'>{title}</h3><p className='mt-2 text-gray-600'>Open {title}</p></Link>) }
