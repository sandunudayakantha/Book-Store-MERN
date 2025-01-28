import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"




function App() {
  
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-12 py-6'> 
      <Outlet/>
      </main>
      
      <Footer/>
    </>
  )
}

export default App
