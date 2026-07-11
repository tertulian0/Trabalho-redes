import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { FormularioInicialMH } from './FormularioInicialMH'
import MalhaHorizontalForm from './FormulaioMH'
import BackboneForm from './FormularioBB'

const [malhaData, setMalhaData] = useState({
  numeroPavimentos: "",
  medidaDistancia: "",
  categoriaCabo: "Cat5e",
  quantidadePontosTelecom: "",
  quantidadeDePontosVoIP: "",
  quantidadeDePontosCFTV: "",
  quantidadeDePontosDados: "",
});

const [backboneData, setBackboneData] = useState({
  numeroPavimentos: 0,
  paresFibrasDisponiveis: 0,
  medidaLance: 0,
  tipoFibra: "MM",
  caracteristicaFibra: "",
  tipoFibraTBLS: "",
  quantidadeBackbonesPorAndar: 0,
  backbonePrimario: 0,
  backboneSecundario: 0,
});

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
            <Route
              path="/malha-horizontal"
              element={
                <MalhaHorizontalForm
                  formData={malhaData}
                  setFormData={setMalhaData}
                />
              }
            />

            <Route
              path="/backbone"
              element={
                <BackboneForm
                  formData={backboneData}
                  setFormData={setBackboneData}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
