import Link from 'next/link'
export default function ProductCard({product}:{product:any}){ return (<div className='bg-white p-4 rounded shadow'><h3 className='font-semibold'>{product.title}</h3><p className='text-sm text-gray-500'>₱{product.price}</p><div className='mt-3'><Link href={'/product/'+product.sku} className='px-3 py-1 bg-primary text-white rounded'>View</Link></div></div>) }
