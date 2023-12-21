import React from 'react'
import Aksesuarlar from './pages/Aksesuarlar/Aksesuarlar'
import Avtotovarlar from './pages/Avtotovarlar/Avtotovarlar'
import Electronic from './pages/Electronic/Electronic'
import Gozallik from './pages/Gozallik/Gozallik'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kiyim from './pages/Kiyim/Kiyim'
import Maishiy from './pages/Maishiy texnika/Maishiy'
import Poyabzallar from './pages/Poyabzallar/Poyabzallar'
import Qurilish from './pages/Qurilish-tamirlash  buyumlari/Qurilish'
import Salomatlik from './pages/Salomatlik/Salomatlik'
import Uy from './pages/Uy-Ro\'zgor buyumlari/Uy'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './components/Header/Login/Login'
import Like from './components/Header/Like/Like'
import Savat from './components/Header/Savat/Savat'
import Detail from './pages/Detail/Detail'


const App = () => {
  return (
    <div className="container">
      <React.Fragment>
        <BrowserRouter>
          <Header />
         
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/elektronika' element={<Electronic />} />
            <Route path='/maishiy' element={<Maishiy />} />
            <Route path='/kiyim' element={<Kiyim />} />
            <Route path='/poyobzallar' element={<Poyabzallar />} />
            <Route path='/aksesuarlar' element={<Aksesuarlar />} />
            <Route path='/gozallik' element={<Gozallik />} />
            <Route path='/salomatlik' element={<Salomatlik />} />
            <Route path='/uy' element={<Uy />} />
            <Route path='/qurilish' element={<Qurilish />} />
            <Route path='/avtotovarlar' element={<Avtotovarlar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/saralanganlar' element={<Like />} />
            <Route path='/savat' element={<Savat />} />
            <Route path='/detail' element={<Detail />} />

          </Routes>
          <br />
          <br />
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}

export default App