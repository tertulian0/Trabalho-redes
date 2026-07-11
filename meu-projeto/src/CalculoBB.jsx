export function calcularBackbone(malhaData, BackboneData) {
  
  const numeroPavimentos = Number(BackboneData.numeroPavimentos);
  const paresFibrasDisponiveis = Number(BackboneData.paresFibrasDisponiveis);
  const medidaLance = Number(BackboneData.medidaLance);
  
  const backboneSecundario = Number(BackboneData.backboneSecundario);
  const backbonePrimario = Number(BackboneData.backbonePrimario);
  const quantidadeBackbonesPorAndar = Number(BackboneData.quantidadeBackbonesPorAndar);
  
  const caracteristicaFibra = BackboneData.caracteristicaFibra;
  let tipoFibra = BackboneData.tipoFibra;
  let tipoFibraTBLS = BackboneData.tipoFibraTBLS;
  
  //calculo bb primario
  let comprimentoDeCaboBackbonePrimario = 0;
  let medidaLanceTotal = medidaLance * quantidadeBackbonesPorAndar;
  for (let index = 0; index < numeroPavimentos; index++) {
    comprimentoDeCabo += medidaLanceTotal;
    medidaLanceTotal += medidaLanceTotal;
  }
  comprimentoDeCaboBackbonePrimario = comprimentoDeCaboBackbonePrimario * 1.1 * backbonePrimario;

  //calculo bb secundario
  let comprimentoDeCaboBackboneSecundario = 0;
  for (let index = 0; index < numeroPavimentos; index++) {
    comprimentoDeCabo += medidaLanceTotal;
    medidaLanceTotal += medidaLanceTotal;
  }
  comprimentoDeCaboBackboneSecundario = comprimentoDeCaboBackboneSecundario * 1.2 * backboneSecundario;


  //calculo de outros itens
  let dispositivoDeRecepcao = "";
  let numeroDeDispositivosDeRecepcao = numeroPavimentos;
  
  if (paresFibrasDisponiveis > 12) {
    dispositivoDeRecepcao = "Distribuidor Optico (DIO)";
  }else{
    dispositivoDeRecepcao = "Transmissor Optico (TO)";
  }
  numeroDeDispositivosDeRecepcao

  if (tipoFibra == "MM") {
    tipoFibra = "Multimodo"
  } else{
    tipoFibra = "Monomodo"
  }

  if (tipoFibraTBLS == "TB") {
    tipoFibraTBLS = "Tigth buffer"
  } else{
    tipoFibraTBLS = "Loose"
  }

  const paresFibraTotal = paresFibrasDisponiveis * numeroPavimentos;

  //strings para retorno
  const fibraoptica = 'Fibra ${tipoFibra} ${caracteristicaFibra} ${tipoFibraTBLS} ${paresFibraTotal} fibras';



  return {
    fibraoptica,
    paresFibraTotal,
    comprimentoDeCaboBackbonePrimario,
    comprimentoDeCaboBackboneSecundario,
    dispositivoDeRecepcao,
    numeroDeDispositivosDeRecepcao,
  };
}
