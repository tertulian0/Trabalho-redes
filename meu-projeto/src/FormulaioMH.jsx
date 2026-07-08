import { useState } from "react";
import { calcularMH } from "./CalculoMH.jsx";

//separar em formulário geral e formulário por pavimento
function MalhaHorizontalForm() {
  const [formData, setFormData] = useState({
    medidaDistancia: "",//colocar limite de distancia (90m) //form especifico
    categoriaCabo: "5e"|"6"|"6A"|"7"|"8",//form geral "5e"|"6"|"6A"|"7"|"8",
    pontosDados: "",//form especifico
    pontosTelefonia: "",  //form especifico
    pontosCFTV: "", //form especifico
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleMalhaHorizontalSubmit = (e) => {
    e.preventDefault();
    console.log(calcularMH(formData));
  }
  return (
    <form onSubmit={handleMalhaHorizontalSubmit}>
      <h2>Malha Horizontal</h2>

      <div>
        <label>Medida básica para cálculo da distância da MH (m)</label>
        <input
          type="number"
          name="medidaDistancia"
          value={formData.medidaDistancia}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div>
        <label>Categoria do cabo</label>
        <select
          name="categoriaCabo"
          value={formData.categoriaCabo}
          onChange={handleChange}
        >
          <option value="Cat5e">Categoria 5e</option>
          <option value="Cat6">Categoria 6</option>
          <option value="Cat6A">Categoria 6A</option>
          <option value="Cat7">Categoria 7</option>
          <option value="Cat8">Categoria 8</option>
        </select>
      </div>

      <h3>Pontos de Telecomunicações / Redes</h3>

      <div>
        <label>Pontos de Dados</label>
        <input
          type="number"
          name="pontosDados"
          value={formData.pontosDados}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div>
        <label>Pontos de Telefonia</label>
        <input
          type="number"
          name="pontosTelefonia"
          value={formData.pontosTelefonia}
          onChange={handleChange}
          min="0"
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default MalhaHorizontalForm;