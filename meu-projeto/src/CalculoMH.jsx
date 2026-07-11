
export function calcularMH(formData) {
    //variaveis base
    let pontosDados = Number(formData.pontosDados);
    let pontosTelefonia = Number(formData.pontosTelefonia);
    let pontosCFTV = Number(formData.pontosCFTV); 
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



    const estiquetasPatchPanel = quantidadePPMH * 24;
    const quantidadePatchCableAmarelo = pontosTelefonia;
    const quantidadePatchCableAzul = pontosDados;
    const quantidadePatchCableVermelho = pontosCFTV;

    //rack e as coisas dele depois coloca
    const tamanhoRack = calcularRack(switchTam, quantidadeSwitch, PPMHTAM, quantidadePPMH, organizadorFrontalTam, quantidadeOrgFrontal, noBreakTam);
    if(tamanhoRack > 48){
        var quantidadeRack = calcularQuantidadeRack(tamanhoRack); 
    }
    else{
        quantidadeRack = '1 Rack de '+tamanhoRack+'U';
    }
    
    
    //miscelânea
    const quantReguaDeFechamento = tamanhoRack*0.5;
    const quantidadePorcaGaiola = tamanhoRack*4;   
    const quantidadeRolosAbracadeiraVelcro = quantidadeRack + " rolos de 3M Velcro 25mm";
    const quantidadeRolosAbracadeiraPlastica = quantidadeRack + " pacotes de 100m";
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
    if(tamanhoRack < 6){
        return 6;
    }
    else if(tamanhoRack > 6 && tamanhoRack <= 12){ 
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
        return tamanhoRack;
    }
}

function calcularQuantidadeRack(tamanhoRack){
    if(tamanhoRack*0.5 < 48){
        return tamanhoRack*0.5;
    }
    for(let i = 2; i < 100; i++){
        if(tamanhoRack/i <= 48 && tamanhoRack/i > 12){
            if((tamanhoRack/i)%4 != 0){
                tamanhoRack = (tamanhoRack/i) + (4 - (tamanhoRack%4));
            }
        }
        else if(tamanhoRack/i <= 12){
            if((tamanhoRack/i)%2 != 0){
            tamanhoRack = (tamanhoRack/i) + 1;
            }
        }
        else if(tamanhoRack/i < 6){
            tamanhoRack = 6;
        }
        return i + " Rack de "+ tamanhoRack+"U";
        }      
    }
    