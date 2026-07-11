import { useState } from "react";
import { calcularBackbone } from "./CalculoBB";

function BackboneForm({ BackboneData, setBackboneData }) {
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setBackboneData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBackboneSubmit = (e) => {
    e.preventDefault();
    const orcamento = calcularBackbone(BackboneData);
    console.log("Orçamento Backbone:", orcamento);
    setResultado(orcamento);
  };

  return (
    <form onSubmit={handleBackboneSubmit} className="formulario">
      <h2 className="titulo">Infraestrutura de Backbone</h2>

      <div className="campo">
        <label className="label">Número de pavimentos da edificação</label>
        <input
          type="number"
          name="numeroPavimentos"
          value={BackboneData.numeroPavimentos}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="campo">
        <label className="label">Número de pares de fibras que ficarão disponíveis</label>
        <input
          type="number"
          name="paresFibrasDisponiveis"
          value={BackboneData.paresFibrasDisponiveis}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="campo">
        <label className="label">Medida básica para cálculo dos lances de cabo backbone (m)</label>
        <input
          type="number"
          name="medidaLance"
          value={BackboneData.medidaLance}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="campo">
        <label className="label">Especificação do cabo de fibra óptica (MM/SM)</label>
        <select name="tipoFibra" value={BackboneData.tipoFibra} onChange={handleChange}>
          <option value="MM">Multimodo (MM)</option>
          <option value="SM">Monomodo (SM)</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Característica da fibra óptica</label>
        <input
          type="text"
          name="caracteristicaFibra"
          value={BackboneData.caracteristicaFibra}
          onChange={handleChange}
          placeholder="Ex.: OM3, OM4, OS2..."
        />
      </div>

      <div className="campo">
        <label className="label">Quantidade de backbones por andar</label>
        <input
          type="number"
          name="quantidadeBackbonesPorAndar"
          value={BackboneData.quantidadeBackbonesPorAndar}
          onChange={handleChange}
          min="1"
        />
      </div>
      
      <div className="campo">
        <label className="label">Especificação do cabo de fibra óptica (Tigth/Loose)</label>
        <select name="tipoFibra" value={BackboneData.tipoFibraTBLS} onChange={handleChange}>
          <option value="TB">Tigth Buffer (TB)</option>
          <option value="LS">Loose (LS)</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Existencia de quantos backbones primarios e secundarios</label>
        <div>
          <label>
            <input
              type="number"
              name="numBackbonePrimario"
              checked={BackboneData.numBackbonePrimario}
              onChange={handleChange}
            />
            Backbone primário
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              name="numBackboneSecundario"
              checked={BackboneData.numBackboneSecundario}
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

export default BackboneForm;