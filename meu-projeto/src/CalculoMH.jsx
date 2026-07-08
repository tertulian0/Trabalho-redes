
export function calcularMH(formData) {
    //variaveis base
    let totalPontos = Number(formData.pontosDados) + Number(formData.pontosTelefonia) + Number(formData.pontosCFTV);   
    //area de trabalho
    const numTomadas = totalPontos;
    const numPatchCords = totalPontos / 2;
    const espelhosConexao = totalPontos / 2;
    const etiquetasTomada = totalPontos;

    //cabeamento horizontal
    const quantidadeCaixas = (numTomadas * Number(formData.medidaDistancia))% 305 == 0 ? (numTomadas * Number(formData.medidaDistancia)) / 305 : Math.floor((numTomadas * Number(formData.medidaDistancia)) / 305) + 1;
    const etiquetaMH = totalPontos;

    //sala de telecomunicações
    const quantidadePPMH = (numTomadas / 24)% 2 == 0 ? (numTomadas / 24) : Math.floor(numTomadas / 24) + 1;
    const quantidadeOrgFrontal = quantidadePPMH * 2;
    const estiquetasPatchPanel = quantidadePPMH * 24;
    const quantidadePatchCables = totalPontos;
    //rack e as coisas dele depois coloca
    
    //miscelânea
    return {
        numTomadas,
        numPatchCords,
        espelhosConexao,
        etiquetasTomada,
        quantidadeCaixas,
        etiquetaMH,
        quantidadePPMH,
        quantidadeOrgFrontal,
        estiquetasPatchPanel,
        quantidadePatchCables
    };
}
