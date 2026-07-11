import { Link } from "react-router-dom";

function BackboneForm({ BackboneData, setBackboneData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBackboneData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="formulario">
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
        <label className="label">Especificação do cabo de fibra óptica (Tight/Loose)</label>
        <select name="tipoFibraTBLS" value={BackboneData.tipoFibraTBLS} onChange={handleChange}>
          <option value="TB">Tight Buffer (TB)</option>
          <option value="LS">Loose (LS)</option>
        </select>
      </div>

      <div className="campo">
        <label className="label">Quantidade de backbones primários e secundários</label>
        <div>
          <label className="label">Backbone primário</label>
          <input
            type="number"
            name="numBackbonePrimario"
            value={BackboneData.numBackbonePrimario}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div>
          <label className="label">Backbone secundário</label>
          <input
            type="number"
            name="numBackboneSecundario"
            value={BackboneData.numBackboneSecundario}
            onChange={handleChange}
            min="0"
          />
        </div>
      </div>

      <Link to="/resultadoBB" className="botao-salvar">
        Salvar
      </Link>
    </form>
  );
}

export default BackboneForm;