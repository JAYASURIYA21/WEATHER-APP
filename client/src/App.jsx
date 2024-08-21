import Hero from "./assets/components/Hero"
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"

function App() {

  return (
    <div className="bg-midnight h-screen">
      <Navbar show={true} />
      <Hero />
      {/* <Footer /> */}
    </div>
  )
}

export default App
