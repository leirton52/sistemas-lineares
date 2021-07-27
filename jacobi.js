let coefA = [
    [10,1,1],
    [5,30,2],
    [0,1,-10]
]

let coefB = [25,0,6]

//inicia o vetor que irá conter a solução
let X = []

//sistema do tipo [A][X] = [B]
function jacobiResolve(A, B){
    for(let i = 0; i< A.length; i++){
        X[i] = 0
    }

    let err = []
    let maxErr = 0
    let count = 0

    do {
        //j para linha, i para coluna
        A.forEach( (line, j) => {
            let soma = 0

            for (let i = 0; i < line.length; i++) {
                if(i == j){
                    continue
                }

                soma += X[i]*line[i]
            }

            //crinado uma variável para guardar temporariamente o valor da icógnita
            let XAnterior = X[j]
            
            X[j] = (coefB[j] - soma)/line[j]

            err[j] = Math.abs(X[j] - XAnterior)
        })

        maxErr = err.reduce((max, termAtual) => Math.max(max, termAtual))

        count++
    } while (maxErr >= 0.001 && count <= 500);

    console.log(`iterações = ${count}`)
    console.log(`Erro máximo = ${maxErr}`)
    console.log(X)
}

jacobiResolve(coefA, coefB)