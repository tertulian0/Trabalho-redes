import { useState } from "react";

function MalhaHorizontalForm() {
  const [formData, setFormData] = useState({
    numeroPavimentos: "",
    pontosPorPavimento: "",
    medidaDistancia: "",
    categoriaCabo: "Cat6",
    pontosDados: "",
    pontosTelefonia: "",
    pontosWifi: "",
    materialSEQ: "",
    materialSET: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Cálculos automáticos
  const totalPontos =
    (Number(formData.pontosDados) || 0) +
    (Number(formData.pontosTelefonia) || 0) +
    (Number(formData.pontosWifi) || 0);

  const totalPontosEdificacao =
    (Number(formData.numeroPavimentos) || 0) *
    (Number(formData.pontosPorPavimento) || 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      totalPontos,
      totalPontosEdificacao,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Malha Horizontal</h2>

      <div>
        <label>Número de pavimentos</label>
        <input
          type="number"
          name="numeroPavimentos"
          value={formData.numeroPavimentos}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div>
        <label>Número de pontos por pavimento</label>
        <input
          type="number"
          name="pontosPorPavimento"
          value={formData.pontosPorPavimento}
          onChange={handleChange}
          min="0"
        />
      </div>

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

      <div>
        <label>Pontos para Wi-Fi</label>
        <input
          type="number"
          name="pontosWifi"
          value={formData.pontosWifi}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div>
        <strong>Total de pontos por serviço: {totalPontos}</strong>
      </div>

      <div>
        <strong>
          Total de pontos da edificação: {totalPontosEdificacao}
        </strong>
      </div>

      <h3>Materiais</h3>

      <div>
        <label>Material da SEQ</label>
        <textarea
          name="materialSEQ"
          value={formData.materialSEQ}
          onChange={handleChange}
          rows="3"
          placeholder="Ex.: Patch Panel, Switch, DIO..."
        />
      </div>

      <div>
        <label>Material da SET</label>
        <textarea
          name="materialSET"
          value={formData.materialSET}
          onChange={handleChange}
          rows="3"
          placeholder="Ex.: Rack, Organizadores, Tomadas RJ-45..."
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default MalhaHorizontalForm;