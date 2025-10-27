import { NextResponse } from 'next/server'
import { courses } from '@/data/mockCourses'
export async function GET(){ return NextResponse.json({ data: courses }) }
