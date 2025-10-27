import { NextResponse } from 'next/server'
import { products } from '@/data/mockProducts'
export async function GET(){ return NextResponse.json({ data: products }) }
