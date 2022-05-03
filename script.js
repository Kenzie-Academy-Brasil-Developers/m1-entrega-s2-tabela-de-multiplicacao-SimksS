function multiplicationTabble (n){ 
    let tabuada = [] 
    for (let linha = 0 ; linha <= n  ; linha++){
        tabuada.push([0])
        for (let coluna = 1; coluna <= n  ; coluna++){
            tabuada[linha].push(coluna*linha) }
        
    }
    

console.table(tabuada)
}
multiplicationTabble(5)
