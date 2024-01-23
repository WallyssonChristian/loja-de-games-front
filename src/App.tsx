import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'

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

              {/*<Route path='/cadastro' element={<Cadastro />} />
              <Route path='/postagem' element={<Postagem />} />
              <Route path='/temas' element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />*/}

            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
