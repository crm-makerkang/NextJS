'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  const clickme = () => {
    console.log('clickme')
  }
  return (
    <main className="grid place-items-center h-screen">
      <div className='text-5xl '>
        Next.js is Awesome!
      </div>
      <Button onClick={clickme}>Test</Button>
    </main>
  )
}
