maTestA = [
    [1.333, 4, 1.2],
    [2, 4, 7],
    [2, 4, 7],
    [2, 4, 7],
    [453, 70, 30]
]

maTestB = [6.8934, 56.78, 445.5, 0, 98]

function roundToN(num,N) {    
    return +(Math.round(num + `e+${N}`)  + `e-${N}`);
}


function visualisarMatriz(matriz, precisao){
    matriz.forEach(line => {
        let string = ""
        line.forEach(term =>{
            string += `${roundToN(term, precisao)}\t`
        })
        
        console.log(string)
    });
}

//sistema tipo [A][X] = [B]
function vizualizarSistema(A, B, precisao){
    //testando se as matrizes [A] e [B] têm a mesma quantidade de linhas
    
    console.log(A.length)
    console.log(B.length)
    
    if(A.length != B.length){
        console.log("matrizes de coeficientes incompatíveis")
        return
    }

    let X = []
    //criando a matriz com as icógnitas
    for(i=0; i<A.length; i++){
        X[i] = `X${i + 1}`
    }

    A.forEach((line, i) =>{
        let string = "|"

        line.forEach((term, i) =>{
            string += `${roundToN(term, precisao)}\t`
        })

        if (i != Math.round(((A.length-1)/2))) {
            string += `| \t|${X[i]}| \t |${roundToN(B[i], precisao)}\t|`
        } else {
            string += `| + \t|${X[i]}| = \t |${roundToN(B[i], precisao)}\t|`
        }
        //string += `| \t|${X[i]}| \t ${B[i]}|`

        console.log(string)
    })
}

visualisarMatriz(maTestA, 3)

vizualizarSistema(maTestA, maTestB, 3)








