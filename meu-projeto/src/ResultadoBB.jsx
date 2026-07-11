import { Link } from 'react-router-dom';
import { calcularBackbone } from './CalculoBB';


function ResultadoBB({ backboneData }) {
  if (!backboneData || !backboneData.numeroPavimentos) {
    return (
      <div className="resultado-container">
        <h2 className="titulo">Nenhum resultado disponível</h2>
        <p>Preencha o formulário de Backbone e tente novamente.</p>
        <Link to="/backbone" className="botao-voltar">
          Voltar ao formulário
        </Link>
      </div>
    );
  }

  const resultado = calcularBackbone(backboneData);

  return (
    <div className="resultado-container">
      <h2 className="titulo">Resultado - Backbone</h2>

      <div className="resultado-card">
        <h3>Informações Gerais</h3>
        <div className="resultado-item">
          <span className="label">Número de pavimentos:</span>
          <span className="valor">{backboneData.numeroPavimentos}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Pares de fibras disponíveis:</span>
          <span className="valor">{backboneData.paresFibrasDisponiveis}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Medida do lance (m):</span>
          <span className="valor">{backboneData.medidaLance}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Backbones por andar:</span>
          <span className="valor">{backboneData.quantidadeBackbonesPorAndar}</span>
        </div>
      </div>

      <div className="resultado-card">
        <h3>Fibra Óptica</h3>
        <div className="resultado-item">
          <span className="label">Especificação completa:</span>
          <span className="valor">{resultado.fibraoptica}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Total de pares de fibra:</span>
          <span className="valor">{resultado.paresFibraTotal}</span>
        </div>
      </div>

      <div className="resultado-card">
        <h3>Cabeamento Backbone</h3>
        <div className="resultado-item">
          <span className="label">Comprimento do cabo BB Primário (m):</span>
          <span className="valor">{resultado.comprimentoDeCaboBackbonePrimario.toFixed(2)}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Comprimento do cabo BB Secundário (m):</span>
          <span className="valor">{resultado.comprimentoDeCaboBackboneSecundario.toFixed(2)}</span>
        </div>
      </div>

      <div className="resultado-card">
        <h3>Dispositivos Ópticos</h3>
        {resultado.dispositivoDio && (
          <div className="resultado-item">
            <span className="label">{resultado.dispositivoDio}:</span>
            <span className="valor">{resultado.numDIO}</span>
          </div>
        )}
        {resultado.dispositivoTo && (
          <div className="resultado-item">
            <span className="label">{resultado.dispositivoTo}:</span>
            <span className="valor">{resultado.numTO}</span>
          </div>
        )}
        {!resultado.dispositivoDio && !resultado.dispositivoTo && (
          <div className="resultado-item">
            <span className="label">Nenhum dispositivo óptico necessário</span>
          </div>
        )}
      </div>

      <div className="resultado-acoes">
        <Link to="/backbone" className="botao-voltar">
          Voltar
        </Link>
        <Link to="/" className="botao-home">
          Ir para início
        </Link>
      </div>
    </div>
  );
}

export default ResultadoBB;
