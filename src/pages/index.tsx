import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'centeredText'}>
      <h1>This is Home page</h1>
    </main>
  )
}
