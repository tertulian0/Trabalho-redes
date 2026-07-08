import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { FormularioInicialMH } from './FormularioInicialMH'
import MalhaHorizontalForm from './FormulaioMH'
import FormularioBackbone from './FormularioBackbone'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <p className="eyebrow">Trabalho redes</p>
            <h1>Calculadora de infraestrutura</h1>
          </div>

          <nav className="app-nav" aria-label="Navegação principal">
            <Link to="/">Início</Link>
            <Link to="/malha-horizontal">Malha horizontal</Link>
            <Link to="/backbone">Backbone</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<FormularioInicialMH />} />
            <Route path="/malha-horizontal" element={<MalhaHorizontalForm />} />
            <Route path="/backbone" element={<FormularioBackbone />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
