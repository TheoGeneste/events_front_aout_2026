import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Path = chemin d'acces sur le navigateur */}
          {/* Element = Composant afficher pour la route associée */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
