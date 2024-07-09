import './App.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from './Components/Layout'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='project' element={<Project />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
