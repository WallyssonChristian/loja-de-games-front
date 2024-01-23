import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Menu />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/cadastroCategoria' element={<FormCategoria/>}/>
              <Route path="/editarCategoria/:id" element={<FormCategoria/>} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

              {/*
              <Route path='/postagem' element={<Postagem />} />
              <Route path='/temas' element={<ListaTemas />} />
              */}

            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
