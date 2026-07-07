
function calcularMH(formData){

    let resultado = {

        patchPanel: {
            categoria: formData.categoria,
            quantidadePadrao: Math.ceil(formData.pontosDados/24),
            quantidadeTelefonia: Math.ceil(formData.pontosTelefonia/24),
            numPortas: 24
        },
        quantidadePatchCord: formData.pontosPorAndar,
        quantidadeCaixas: Math.ceil((formData.pontosPorPavimento*formData.medidaDistancia) / 305),
        quantidadeSwitch: cu, 
        
    };

    return resultado;                                                                       
}
