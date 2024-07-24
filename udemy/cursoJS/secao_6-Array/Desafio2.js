const arr = [1, 2, 3]

let media
let soma = 0

for( n of arr ){
    //console.log(n)
    soma = soma + n
}

media = soma /arr.length

console.log(soma)
console.log(media)