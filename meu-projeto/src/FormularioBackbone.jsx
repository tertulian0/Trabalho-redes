import { useState } from "react";

function FormularioBackbone() {
  const [formData, setFormData] = useState({
    numeroPavimentos: 0,
    paresFibras: 0,
    medidaLance: 0,
    tipoFibra: "MM"|"SM",
    caracteristicaFibra: "",
    quantidadeBackbonesAndar: 0,
    backbonePrimario: false,
    backboneSecundario: false,
    elementosAcessorios: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    calcularBackbone(formData);

  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
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
        <label className="label">Quantidade de backbones por andar</label>
        <input
          type="number"
          name="quantidadeBackbonesAndar"
          value={formData.quantidadeBackbonesAndar}
          onChange={handleChange}
          min="1"
        />
      </div>

      <fieldset>
        <legend>Tipos de Backbone</legend>

        <label>
          <input
            type="checkbox"
            name="backbonePrimario"
            checked={formData.backbonePrimario}
            onChange={handleChange}
          />
          Backbone Primário
        </label>

        <label>
          <input
            type="checkbox"
            name="backboneSecundario"
            checked={formData.backboneSecundario}
            onChange={handleChange}
          />
          Backbone Secundário
        </label>
      </fieldset>

      <div className="campo">
        <label className="label">Elementos acessórios da interligação ponto a ponto</label>
        <textarea
          name="elementosAcessorios"
          value={formData.elementosAcessorios}
          onChange={handleChange}
          rows="5"
          placeholder="Ex.: DIO, patch cords, pigtails, adaptadores, conectores, bandejas de emenda..."
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default FormularioBackbone;