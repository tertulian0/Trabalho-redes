import { useState } from "react";
import { calcularBackbone } from "./CalculoBB";

function FormularioBackbone() {
  const [formData, setFormData] = useState({
    numeroPavimentos: 0,
    paresFibras: 0,
    medidaLance: 0,
    tipoFibra: "MM",
    caracteristicaFibra: "",
    quantidadeBackbonesTotal: 0,
    quantidadeBackbonesPrimario: 0,
    quantidadeBackbonesSecundario: 0,
    // elementosAcessorios: "",
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
    setResultado(calcularBackbone(formData));
  };

  return (
    <>
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
          <label className="label">Número de pares de fibras disponíveis</label>
          <input
            type="number"
            name="paresFibras"
            value={formData.paresFibras}
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
          <select
            name="tipoFibra"
            value={formData.tipoFibra}
            onChange={handleChange}
          >
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
          <label className="label">Quantidade de backbones no total</label>
          <input
            type="number"
            name="quantidadeBackbonesTotal"
            value={formData.quantidadeBackbonesTotal}
            onChange={handleChange}
            min="1"
          />
        </div>
        <div className="campo">
          <label className="label">Quantidade de backbones primários</label>
          <input
            type="number"
            name="quantidadeBackbonesPrimario"
            value={formData.quantidadeBackbonesPrimario}
            onChange={handleChange}
            min="1"
          />
        </div>
        <div className="campo">
          <label className="label">Quantidade de backbones secundários</label>
          <input
            type="number"
            name="quantidadeBackbonesSecundario"
            value={formData.quantidadeBackbonesSecundario}
            onChange={handleChange}
            min="1"
          />
        </div>

        {/* <div className="campo">
          <label className="label">Elementos acessórios da interligação ponto a ponto</label>
          <textarea
            name="elementosAcessorios"
            value={formData.elementosAcessorios}
            onChange={handleChange}
            rows="5"
            placeholder="Ex.: DIO, patch cords, pigtails, adaptadores, conectores, bandejas de emenda..."
          />
        </div> */}

        <button type="submit">Salvar</button>
      </form>

    </>
  );
}

export default FormularioBackbone;