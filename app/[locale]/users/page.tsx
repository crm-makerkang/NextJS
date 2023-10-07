// Ref: https://www.youtube.com/watch?v=DTGRIaAJYIo

'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Container from '@/components/Container'
import { ShoppingCart, ShoppingBag } from 'lucide-react'

import axios from 'axios'

export default function Home() {
  return (
    <Container>
      <Button
        onClick={ async () => {
          var res = await axios.get('/api/readFile?dir=/')
          console.log(res.data)
        }}
      >
        Get /
      </Button>

      <Button
        onClick={ async () => {
          var res = await axios.get('/api/readFile?dir=./')
          console.log(res.data)
        }}
      >
        Get ./
      </Button>


    </Container>
  );
}