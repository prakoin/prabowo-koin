
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prabowo Koin</title>
        <meta name="description" content="Koin Rakyat. Meme Bangsa. Bukan Sekadar Janji." />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen bg-yellow-100 text-center p-4">
        <h1 className="text-4xl font-bold mb-4">🚀 Prabowo Koin</h1>
        <p className="mb-6">Koin Rakyat. Meme Bangsa. Bukan Sekadar Janji.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full">Buy $PRA</button>
      </main>
      <Footer />
    </>
  )
}
