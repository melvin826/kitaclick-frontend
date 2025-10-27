import ProductCard from '@/components/ProductCard'
import { products } from '@/data/mockProducts'
export default function Catalog(){ return (<div><h1 className='text-2xl font-bold'>Catalog</h1><div className='mt-4 grid md:grid-cols-3 gap-4'>{products.map(p=> <ProductCard key={p.sku} product={p}/>)}</div></div>) }
