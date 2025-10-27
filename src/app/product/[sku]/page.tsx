import { products } from '@/data/mockProducts'
import { notFound } from 'next/navigation'
export default function ProductPage({params}:{params:{sku:string}}){
  const product = products.find(p=>p.sku===params.sku)
  if(!product) notFound()
  return (<div><h1 className='text-2xl font-bold'>{product.title}</h1><p className='mt-2 text-gray-600'>₱{product.price}</p></div>)
}
