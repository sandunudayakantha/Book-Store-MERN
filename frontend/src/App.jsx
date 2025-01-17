import { Outlet } from "react-router"
import Navbar from "./components/Navbar"




function App() {
  
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-12 py-6'> 
      <Outlet/>
      </main>
      
      <footer>footer</footer>
    </>
  )
}

export default App
