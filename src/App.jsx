import Info from "./components/Info"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
    <div className="flex flex-col bg-zinc-900 rounded-lg w-76 shadow-lg shadow-zinc-900/30">
      <Info />
      <Main />
      <Footer />
    </div>
   </div>
  )
}

export default App
