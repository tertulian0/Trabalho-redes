import { useState } from "react";

function MalhaHorizontalForm({ formData, setFormData }) {
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePavimentoChange = (index, field, value) => {
    setFormData((prev) => {
      const pavimentos = [...prev.pavimentos];
      pavimentos[index] = { ...pavimentos[index], [field]: value };
      return { ...prev, pavimentos };
    }); 
  };

  const handleMalhaHorizontalSubmit = (e) => {
    e.preventDefault();
    setResultado(formData);
  };

  return (
    <form onSubmit={handleMalhaHorizontalSubmit} className="formulario">
      <h2 className="titulo">Malha Horizontal</h2>

      <div className="campo">
        <label className="label">Número de pavimentos da edificação</label>
        <input
          type="number"
          name="numeroPavimentos"
          value={formData.numeroPavimentos}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="campo">
        <label className="label">Medida básica para cálculo da distância da MH (m)</label>
        <input
          type="number"
          name="medidaDistancia"
          value={formData.medidaDistancia}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="campo">
        <label className="label">Categoria do cabo de MH</label>
        <select name="categoriaCabo" value={formData.categoriaCabo} onChange={handleChange}>
          <option value="Cat5e">Categoria 5e</option>
          <option value="Cat6">Categoria 6</option>
          <option value="Cat6A">Categoria 6A</option>
          <option value="Cat7">Categoria 7</option>
          <option value="Cat8">Categoria 8</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Pontos por serviços:</label>
        <label className="label">VoIP</label>
        <input
          type="number"
          name="quantidadeDePontosVoIP"
          value={formData.quantidadeDePontosVoIP}
          onChange={handleChange}
          min="0"
        />
        <label className="label">CFTV</label>
        <input
          type="number"
          name="quantidadeDePontosCFTV"
          value={formData.quantidadeDePontosCFTV}
          onChange={handleChange}
          min="0"
        />
        <label className="label">Dados</label>
        <input
          type="number"
          name="quantidadeDePontosDados"
          value={formData.quantidadeDePontosDados}
          onChange={handleChange}
          min="0"
        />
      </div>

      <button type="submit">Salvar</button>

      {resultado && (
        <pre style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </form>
  );
}

export default MalhaHorizontalForm;