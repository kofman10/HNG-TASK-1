import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Routes>
              <Route path = '/' element = {<Home/>} />
              <Route path = '/contact' element = {<Contact/>} />
    </Routes>
    </>
  )
}

export default App
