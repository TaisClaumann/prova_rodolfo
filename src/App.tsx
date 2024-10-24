import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CadastroUsuarioPage from './Paginas/CadastroUsuarioPage'
import './App.css'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CadastroUsuarioPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
