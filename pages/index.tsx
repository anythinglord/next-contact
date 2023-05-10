import Card from '@/components/Card'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen grid grid-rows-4 grid-cols-4 gap-4 p-12 ${inter.className}`}
    >
      <div className="cursor-pointer p-5 bg-white shadow rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
      <div className="cursor-pointer p-5 bg-white shadow rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
      <Card title='This is a new card' content='this is a new content' />
    </main>
  )
}
