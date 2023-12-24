
import HeroSection from '@/components/component/herosection'
import GPACalculator from '@/components/component/gpacalculator'
import ModeToggle from '@/components/component/menutoggle'
import Footer from '@/components/component/footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 z-10" >
      {/* <div
      style={{
        background: "linear-gradient(rgb(230 96 96), rgb(255 255 255 / 0%))",
        height: 300,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "repeat-x",
        position: "absolute",
        zIndex: -1,
        
      }}
      >
 
      </div> */}
      
     {/* <div className='flex min-h-screen flex-col items-center justify-between p-6 z-10  max-w-5xl mx-auto '> </div> */}
     <ModeToggle />
      <HeroSection />
      <div id='calculargpa'></div>
      <GPACalculator />
      <Footer />
    


    </main>
  )
}
