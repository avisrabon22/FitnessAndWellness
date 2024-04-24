import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
