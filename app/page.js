import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <main className='bg-white'>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
   </main>
  )
}
