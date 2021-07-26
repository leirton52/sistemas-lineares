//sistema do tipo Ax = B

let coefA = [
    [1,1,1],
    [5,3,2],
    [0,1,-1]
]

let coefB = [25,0,6]

function organizarParaEscalonar(coefA, CoefB){
    for(let i=0; i < coefA.length-1; i++){
        //supundo inicialmente que o termo da diagonal princial e o maior em modulo daquela coluna a partir dele
        let max = coefA[i][i]
        let indiceMax = i

        //comparando com todos os termos da coluna que estao abaixo dele
        for(let j = i+1; j < coefA.length; j++){
            if(max < coefA[j][i]){
                max = coefA[j][i]
                indiceMax = j
            }
        }
        
        //Mundando para que o valor maximo va para a diagonal principal
        if(max != coefA[i][i]){
           //salvando temporariamente a linha do termo da diagonal principal
           let temp = coefA[i]
           //passando a linha do termo maximo para a linha da diagonal ptincipal
           coefA[i] = coefA[indiceMax]
           //passando a linha do valor da diagonal principal para onde estava o termo maximo
           coefA[indiceMax] = temp

           //fazendo a mesma coisa para a matriz dos coeficientes indenpendentes
           temp = coefB[i]
           coefB[i] = coefB[indiceMax]
           coefB[indiceMax] = temp
        }
    }    
}

function escalonar(coefA, coefB){
    // laços para percorrer os termos abaixo da diagonal principal
    //i representa as colunas, j representa as linhas
	for(let i=0; i<coefA.length-1; i++){
		for(let  j=i+1; j<coefA.length; j++){
           //calculando o fator da combinação linear para zerar a linha
           //dos termos abaixo da diagonal principal
           let fator = coefA[j][i]/coefA[i][i]
           
           //fazendo a cobinação linear para zerar a linha
           //Se for para salvar uma nova linha e manter a original
           //é melhor usar map() em vez de forEach

           for(k=i;k<coefA.length; k++){
           //coefA[j].forEach((term, index)=>{
                //para fazer as operrações nos termos que já estão zerados
                //if(index>=i){
                    //usamos a linha da diagonal principal paraa multiplicar pelo fator
                    //assim ficamos com j=i
                coefA[j][k] = coefA[j][k] - fator*coefA[i][k]
                //}
           }
           
           coefB[j] = coefB[j] - fator*coefB[i]

		}
	}
}

function resolveSistema(coefA, coefB){
    let solucao = []
    for(let i = coefA.length - 1; i>=0; i--){
       let soma = 0
       for(j = i + 1; j < coefA.length; j++){
            soma = soma + coefA[i][j]*solucao[j]
       }
       
       solucao[i] = (coefB[i] - soma)/coefA[i][i]
    }

    return solucao
}

console.log(coefA)
console.log(coefB)

organizarParaEscalonar(coefA, coefB)

console.log(coefA)
console.log(coefB)

escalonar(coefA, coefB)

console.log(coefA)
console.log(coefB)

let solucao = resolveSistema(coefA, coefB)

console.log(solucao)







