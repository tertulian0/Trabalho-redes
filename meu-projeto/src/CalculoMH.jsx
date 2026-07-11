
export function calcularMH(formData) {
    //variaveis base
    let pontosDados = Number(formData.quantidadeDePontosDados);
    let pontosTelefonia = Number(formData.quantidadeDePontosVoIP);
    let pontosCFTV = Number(formData.quantidadeDePontosCFTV); 
    const totalPontos = pontosDados + pontosTelefonia + pontosCFTV; 

    //medida de U por componente do rack
    const switchTam = 2;
    const PPMHTAM = 1;
    const organizadorFrontalTam = 1;
    const noBreakTam = 4;


    //area de trabalho
    const numTomadas = totalPontos;
    const numPatchCords = totalPontos / 2;
    const espelhosConexao = totalPontos / 2;
    const etiquetasTomada = totalPontos*3;

    //cabeamento horizontal
    const quantidadeCaixas = (numTomadas * Number(formData.medidaDistancia))% 305 == 0 ? (numTomadas * Number(formData.medidaDistancia)) / 305 : Math.ceil((numTomadas * Number(formData.medidaDistancia)) / 305) + 1 + "caixas de 305m";
    const etiquetaMH = totalPontos*2;

    //sala de telecomunicações
    const quantidadePPMH = Math.ceil(totalPontos / 24);
    const quantidadeOrgFrontal = quantidadePPMH * 2;
    const quantidadeSwitch = Math.ceil(totalPontos / 24); 



    const etiquetasPatchPanel = quantidadePPMH * 24;
    const quantidadePatchCableAmarelo = pontosTelefonia;
    const quantidadePatchCableAzul = pontosDados;
    const quantidadePatchCableVermelho = pontosCFTV;

    //rack e as coisas dele depois coloca
    const tamanhoRack = calcularRack(switchTam, quantidadeSwitch, PPMHTAM, quantidadePPMH, organizadorFrontalTam, quantidadeOrgFrontal, noBreakTam);
    let numRacks;
    let quantidadeRack;
    if(tamanhoRack > 48){
        const rackInfo = calcularQuantidadeRack(tamanhoRack);
        numRacks = rackInfo.quantidade;
        quantidadeRack = rackInfo.descricao;
    }
    else{
        numRacks = 1;
        quantidadeRack = '1 Rack de ' + tamanhoRack + 'U';
    }
    
    
    //miscelânea
    const quantReguaDeFechamento = tamanhoRack * 0.5;
    const quantidadePorcaGaiola = tamanhoRack * 4;   
    const quantidadeRolosAbracadeiraVelcro = numRacks + " rolos de 3M Velcro 25mm";
    const quantidadeRolosAbracadeiraPlastica = numRacks + " pacotes de 100m";
    const quantidadeReguaDeFiltroDeLinha = numRacks;

    //retorno em objeto com os valores calculados
    return {
        numTomadas,
        numPatchCords,
        espelhosConexao,
        etiquetasTomada,
        quantidadeCaixas,
        etiquetaMH,
        quantidadePPMH,
        quantidadeOrgFrontal,
        quantidadeSwitch,
        etiquetasPatchPanel,
        quantidadePatchCableAmarelo,
        quantidadePatchCableAzul,
        quantidadePatchCableVermelho,
        quantidadeRack,//inclui tamanhoRack (Ex: 2 racks de 32U, 1 rack de 48U, etc)
        quantReguaDeFechamento,
        quantidadePorcaGaiola,
        quantidadeRolosAbracadeiraVelcro,
        quantidadeRolosAbracadeiraPlastica,
        quantidadeReguaDeFiltroDeLinha,
    };
}

function calcularRack(switchTam, quantidadeSwitch, PPMHTAM, quantidadePPMH, organizadorFrontalTam, quantidadeOrgFrontal, noBreakTam) {
   
    let tamanhoRack = 
        (switchTam*quantidadeSwitch 
        + PPMHTAM*quantidadePPMH 
        + organizadorFrontalTam*quantidadeOrgFrontal 
        + noBreakTam)*1.5;

    tamanhoRack = Math.ceil(tamanhoRack);

    if(tamanhoRack < 6){
        return 6;
    }
    else if(tamanhoRack <= 12){ 
        // arredonda para par
        if(tamanhoRack % 2 != 0){
            return tamanhoRack + 1;
        }
        return tamanhoRack;
    }
    else if(tamanhoRack <= 48){
        // arredonda para múltiplo de 4
        if(tamanhoRack % 4 != 0){
            return tamanhoRack + (4 - (tamanhoRack % 4));
        }
        return tamanhoRack;
    }
    else{
        // > 48, será dividido em múltiplos racks
        return tamanhoRack;
    }
}

function calcularQuantidadeRack(tamanhoRack){
    // Divide o tamanho total em racks de no máximo 48U
    const numRacks = Math.ceil(tamanhoRack / 48);
    let tamanhoPorRack = Math.ceil(tamanhoRack / numRacks);

    // Arredonda para tamanho padrão
    if(tamanhoPorRack <= 12){
        if(tamanhoPorRack % 2 != 0){
            tamanhoPorRack = tamanhoPorRack + 1;
        }
    }
    else if(tamanhoPorRack <= 48){
        if(tamanhoPorRack % 4 != 0){
            tamanhoPorRack = tamanhoPorRack + (4 - (tamanhoPorRack % 4));
        }
    }

    return {
        quantidade: numRacks,
        descricao: numRacks + " Rack(s) de " + tamanhoPorRack + "U"
    };
}