import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { NotFound } from './Exception/NotFound'
import { Home } from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
