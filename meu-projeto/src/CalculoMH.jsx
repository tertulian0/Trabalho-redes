
export function calcularMH(formData) {
    //variaveis base
    const totalPontos = pontosDados + pontosTelefonia + pontosCFTV; 
    let pontosDados = Number(formData.pontosDados);
    let pontosTelefonia = Number(formData.pontosTelefonia);
    let pontosCFTV = Number(formData.pontosCFTV); 

    //medida de U por componente do rack
    const switchTam = 2;
    const PPMHTAM = 1;
    const organizadorFrontalTam = 1;
    const noBreakTam = 4;


    //area de trabalho
    const numTomadas = totalPontos;
    const numPatchCords = totalPontos / 2;
    const espelhosConexao = totalPontos / 2;
    const etiquetasTomada = totalPontos;

    //cabeamento horizontal
    const quantidadeCaixas = (numTomadas * Number(formData.medidaDistancia))% 305 == 0 ? (numTomadas * Number(formData.medidaDistancia)) / 305 : Math.ceil((numTomadas * Number(formData.medidaDistancia)) / 305) + 1;
    const etiquetaMH = totalPontos;

    //sala de telecomunicações
    const quantidadePPMH = Math.ceil(totalPontos / 24);
    const quantidadePPMHDados = Math.ceil(pontosDados / 24);
    const quantidadePPMHTelefonia = Math.ceil(pontosTelefonia / 24);
    const quantidadePPMHCFTV = Math.ceil(pontosCFTV / 24);
    const quantidadeOrgFrontal = quantidadePPMH * 2;
    const quantidadeSwitch = Math.ceil(totalPontos / 24); 

    const estiquetasPatchPanel = quantidadePPMH * 24;
    const quantidadePatchCables = totalPontos;

    //rack e as coisas dele depois coloca
    const tamanhoRack = calcularRack(switchTam, quantidadeSwitch, PPMHTAM, quantidadePPMH, organizadorFrontalTam, quantidadeOrgFrontal, noBreakTam);
    const quantidadeRack = calcularQuantidadeRack(tamanhoRack); 
    
    //miscelânea
    const quantReguaDeFechamento = tamanhoRack*0.5;
    const quantidadePorcaGaiola = tamanhoRack*4;   
    const quantidadeRolosAbracadeira = Math.ceil((quantidadeRack*1.5)/10);
    const quantidadeReguaDeFiltroDeLinha = quantidadeRack*1;

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
        estiquetasPatchPanel,
        quantidadePatchCables,
        quantidadeRack,//inclui tamanhoRack (Ex: 2 racks de 32U, 1 rack de 48U, etc)
        quantReguaDeFechamento,
        quantidadePorcaGaiola,
        quantidadeRolosAbracadeira,
        quantidadeReguaDeFiltroDeLinha,
    };
}

function calcularRack(switchTam, quantidadeSwitch, PPMHTAM, quantidadePPMH, organizadorFrontalTam, quantidadeOrgFrontal, noBreakTam) {
   
    let tamanhoRack = 
        switchTam*quantidadeSwitch 
        + PPMHTAM*quantidadePPMH 
        + organizadorFrontalTam*quantidadeOrgFrontal 
        + noBreakTam;
    
    if(tamanhoRack <= 12){ 
        if(tamanhoRack%2 != 0){
            return tamanhoRack + 1;
        }
        else{
            return tamanhoRack;
        }
    }
    else if (tamanhoRack >= 48){
        if(tamanhoRack%4 != 0){
            return tamanhoRack + (4 - (tamanhoRack%4));
        }
        else{
            return tamanhoRack;
        }
    }
    else if(tamanhoRack > 48){
        calcularQuantidadeRack(tamanhoRack);
    }
}

function calcularQuantidadeRack(tamanhoRack){
    
}