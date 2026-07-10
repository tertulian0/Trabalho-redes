export function calcularBackbone(formData) {
  const numeroPavimentos = Number(formData.numeroPavimentos || 0);
  const paresFibrasDisponiveis = Number(formData.paresFibrasDisponiveis || 0);
  const medidaLance = Number(formData.medidaLance || 0);
  const quantidadeBackbonesPorAndar = Number(formData.quantidadeBackbonesPorAndar || 0);
  const tipoFibra = formData.tipoFibra || "MM";
  const backbonePrimario = Boolean(formData.backbonePrimario);
  const backboneSecundario = Boolean(formData.backboneSecundario);

  const lancesPorCabo = Math.max(1, numeroPavimentos - 1);
  const comprimentoBasePorCabo = medidaLance * lancesPorCabo;
  const comprimentoTotal = comprimentoBasePorCabo * quantidadeBackbonesPorAndar;

  const custoMetroFibra = tipoFibra === "SM" ? 180 : 140;
  const custoParFibra = 95;
  const custoPorPavimento = 380;
  const custoBackbonePrimario = backbonePrimario ? 1800 : 0;
  const custoBackboneSecundario = backboneSecundario ? 1400 : 0;

  const custoCabo = comprimentoTotal * custoMetroFibra;
  const custoFibras = paresFibrasDisponiveis * custoParFibra;
  const custoEstrutura = numeroPavimentos * custoPorPavimento;
  const valorTotal = custoCabo + custoFibras + custoEstrutura + custoBackbonePrimario + custoBackboneSecundario;

  return {
    numeroPavimentos,
    paresFibrasDisponiveis,
    medidaLance,
    tipoFibra,
    quantidadeBackbonesPorAndar,
    backbonePrimario,
    backboneSecundario,
    comprimentoBasePorCabo,
    comprimentoTotal,
    custoCabo,
    custoFibras,
    custoEstrutura,
    custoBackbonePrimario,
    custoBackboneSecundario,
    valorTotal,
  };
}
