import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Remove the admin_token cookie
  cookies().delete('admin_token')
  
  return NextResponse.json({ success: true })
} 