import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard'
import { NotFound } from './Exception/NotFound'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { Profile } from './Pages/Profile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}
export default App
