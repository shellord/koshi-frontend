import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Configuration from './pages/Configuration'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='orders' element={<Orders />} />
        <Route path='configuration' element={<Configuration />} />
      </Routes>
    </Layout>
  )
}

export default App
