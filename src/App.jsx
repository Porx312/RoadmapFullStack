import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu'
import Html from './Components/Html'
import Css from './Components/Css'
import Javascript from "./Components/Javascript"
import Git from './Components/Git'
import Github from './Components/Github'
import Reactx from './Components/Reactx'
import Nodes from './Components/Nodes'
function App() {

  return (
    <main className="content">
       
       <h2 className="text">Roadmap Fullstack</h2>


         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Menu/>}/>
              <Route path="/html" element={<Html/>}/>
              <Route path="/css" element={<Css/>}/>
              <Route path="/js" element={<Javascript/>}/>
              <Route path="/git" element={<Git/>}/>
              <Route path="/github" element={<Github/>}/>
              <Route path="/react" element={<Reactx/>}/>
              <Route path="/node" element={<Nodes/>}/>
            </Routes>
            
          </BrowserRouter>

   </main>
  )
}

export default App
