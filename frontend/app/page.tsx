

import OnScreenKeyboard from "./components/keyboard/OnScreenKeyboard"
import Navbar from "./components/navbar"
import CurrentWord from "./components/wordScreen/CurrentWord"




export default function Home() {

  
  return (
    
    <>
      <Navbar/>
        <main className="flex bg-base-100 transition-all duration-700 text-base-content min-h-screen overflow-hidden flex-col items-center justify-between p-24">
          
          <CurrentWord/>
          <OnScreenKeyboard />
        </main>
      </>

  )
}
