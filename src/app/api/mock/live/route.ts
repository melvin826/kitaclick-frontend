import { NextResponse } from 'next/server'
import { liveEvents } from '@/data/mockLive'
export async function GET(){ return NextResponse.json({ data: liveEvents }) }
