const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x==5){
        break // joga para fora do laço corrente (for ou while e switch-> não do if)
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y==5){
        continue // interrompe a ação e continua rodando o codigo
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a==2 && b ==3) break externo //rotulo => fica feio melhor não usar -> dificil leitura
        console.log(`Par = ${a}, ${b}`)
    }
}





