
import HeroSection from '@/components/component/herosection'
import GPACalculator from '@/components/component/gpacalculator'
import ModeToggle from '@/components/component/menutoggle'
import Footer from '@/components/component/footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 z-10" >

      <div className='flex justify-end w-full p-2'>
        <ModeToggle />
      </div>
      <HeroSection />
      <div id='calculargpa'></div>
      <GPACalculator />
      <Footer />



    </main>
  )
}
