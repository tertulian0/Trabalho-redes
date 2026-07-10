import { useState } from "react";

function FormularioBackbone() {
  const [formData, setFormData] = useState({
    numeroPavimentos: "",
    paresFibrasDisponiveis: "",
    medidaLance: "",
    tipoFibra: "MM",
    caracteristicaFibra: "",
    quantidadeBackbonesPorAndar: "",
    backbonePrimario: false,
    backboneSecundario: false,
  });
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBackboneSubmit = (e) => {
    e.preventDefault();
    setResultado(formData);
  };

  return (
    <form onSubmit={handleBackboneSubmit} className="formulario">
      <h2 className="titulo">Infraestrutura de Backbone</h2>

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
        <label className="label">Número de pares de fibras que ficarão disponíveis</label>
        <input
          type="number"
          name="paresFibrasDisponiveis"
          value={formData.paresFibrasDisponiveis}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="campo">
        <label className="label">Medida básica para cálculo dos lances de cabo backbone (m)</label>
        <input
          type="number"
          name="medidaLance"
          value={formData.medidaLance}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="campo">
        <label className="label">Especificação do cabo de fibra óptica</label>
        <select name="tipoFibra" value={formData.tipoFibra} onChange={handleChange}>
          <option value="MM">Multimodo (MM)</option>
          <option value="SM">Monomodo (SM)</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Característica da fibra óptica</label>
        <input
          type="text"
          name="caracteristicaFibra"
          value={formData.caracteristicaFibra}
          onChange={handleChange}
          placeholder="Ex.: OM3, OM4, OS2..."
        />
      </div>

      <div className="campo">
        <label className="label">Quantidade de backbones por andar</label>
        <input
          type="number"
          name="quantidadeBackbonesPorAndar"
          value={formData.quantidadeBackbonesPorAndar}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="campo">
        <label className="label">Verificação da existência de backbone primário e/ou secundário</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="backbonePrimario"
              checked={formData.backbonePrimario}
              onChange={handleChange}
            />
            Backbone primário
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="backboneSecundario"
              checked={formData.backboneSecundario}
              onChange={handleChange}
            />
            Backbone secundário
          </label>
        </div>
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

export default FormularioBackbone;