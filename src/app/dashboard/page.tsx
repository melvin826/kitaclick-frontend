import WalletCard from '@/components/WalletCard'
export default function Dashboard(){ return (<div className='grid md:grid-cols-3 gap-6'><div className='md:col-span-2'><h1 className='text-2xl font-bold'>Dashboard</h1></div><aside><WalletCard balance={5000} /></aside></div>) }
