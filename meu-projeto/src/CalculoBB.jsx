export function calcularBackbone(formData) {
  const numeroPavimentos = Number(formData.numeroPavimentos || 0);
  const paresFibras = Number(formData.paresFibras || 0);
  const medidaLance = Number(formData.medidaLance || 0);
  const quantidadeBackbonesTotal = Number(formData.quantidadeBackbonesTotal || 0);
  const quantidadeBackbonesPrimario = Number(formData.quantidadeBackbonesPrimario || 0);
  const quantidadeBackbonesSecundario = Number(formData.quantidadeBackbonesSecundario || 0);

  const fibrasPorCabo = paresFibras * 2;
  const lancesPorCabo = Math.max(1, numeroPavimentos - 1);
  const comprimentoBasePorCabo = medidaLance * lancesPorCabo;
  const comprimentoTotal = comprimentoBasePorCabo * quantidadeBackbonesTotal;
  const comprimentoPrimario = comprimentoBasePorCabo * quantidadeBackbonesPrimario;
  const comprimentoSecundario = comprimentoBasePorCabo * quantidadeBackbonesSecundario;
  const capacidadeTotalFibras = fibrasPorCabo * quantidadeBackbonesTotal;

}
