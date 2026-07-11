import { Link } from 'react-router-dom';

function ResultadoMH({ malhaData }) {
  if (!malhaData.numeroPavimentos) {
    return (
      <div className="resultado-container">
        <h2 className="titulo">Nenhum resultado disponível</h2>
        <p>Preencha o formulário de Malha Horizontal e tente novamente.</p>
        <Link to="/malha-horizontal" className="botao-voltar">
          Voltar ao formulário
        </Link>
      </div>
    );
  }

  const totalPontos =
    Number(malhaData.quantidadeDePontosVoIP || 0) +
    Number(malhaData.quantidadeDePontosCFTV || 0) +
    Number(malhaData.quantidadeDePontosDados || 0);

  const distanciaTotal = Number(malhaData.medidaDistancia || 0) * Number(malhaData.numeroPavimentos || 1);

  return (
    <div className="resultado-container">
      <h2 className="titulo">Resultado - Malha Horizontal</h2>

      <div className="resultado-card">
        <h3>Informações Gerais</h3>
        <div className="resultado-item">
          <span className="label">Número de pavimentos:</span>
          <span className="valor">{malhaData.numeroPavimentos}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Medida básica para cálculo (m):</span>
          <span className="valor">{malhaData.medidaDistancia}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Distância total (m):</span>
          <span className="valor">{distanciaTotal}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Categoria do cabo:</span>
          <span className="valor">{malhaData.categoriaCabo}</span>
        </div>
      </div>

      <div className="resultado-card">
        <h3>Pontos de Serviços</h3>
        <div className="resultado-item">
          <span className="label">VoIP:</span>
          <span className="valor">{malhaData.quantidadeDePontosVoIP || 0}</span>
        </div>
        <div className="resultado-item">
          <span className="label">CFTV:</span>
          <span className="valor">{malhaData.quantidadeDePontosCFTV || 0}</span>
        </div>
        <div className="resultado-item">
          <span className="label">Dados:</span>
          <span className="valor">{malhaData.quantidadeDePontosDados || 0}</span>
        </div>
        <div className="resultado-item resultado-total">
          <span className="label">Total de pontos:</span>
          <span className="valor">{totalPontos}</span>
        </div>
      </div>

      <div className="resultado-acoes">
        <Link to="/malha-horizontal" className="botao-voltar">
          Voltar
        </Link>
        <Link to="/" className="botao-home">
          Ir para início
        </Link>
      </div>
    </div>
  );
}

export default ResultadoMH;
