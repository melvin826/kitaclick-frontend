import { teachers } from '@/data/mockTeachers'
export default function eTalk(){ return (<div><h1 className='text-2xl font-bold'>eTalk</h1><ul className='mt-4'>{teachers.map(t=> <li key={t.id}>{t.name} — {t.language}</li>)}</ul></div>) }
