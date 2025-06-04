import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Items from './pages/Items'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/items' element={<Items/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App
