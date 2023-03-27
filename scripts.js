var json =require('./artists.json');
 


//tratamento dos dados para criar um array com apenas os dados intessantes
 var novoJson = []
json.forEach(function(item){
    let artista = {
        nome: item.name,
        popularity : item.popularity,
        type : item.type,
        followers: item.followers.total
    }
    novoJson.unshift(artista)
})

console.log("JSON tratado mas não ordenado")

console.log(novoJson)
console.log("\n")
console.log("##################################################################")
console.log("\n")

// ranking dos top 7 artistas com mais seguidores


novoJson.sort(function(a,b){
    if(a.followers > b.followers){
        return -1;
    }else{
        return true;
    }

})


console.log("Ranking TOP 7 com mais SEGUIDORES")

for(let i =0; i<= 6; i++){
    console.log("Posição no Ranking: " + (i+1)+"° lugar")
    console.log("Artista: "+novoJson[i].nome + "\nSeguridores: " + novoJson[i].followers + "\nPopularidade: " + novoJson[i].popularity)
    console.log('\n')
}


// ranking dos top 5 artistas com mais popularidade
novoJson.sort(function(a,b){
  if(a.popularity > b.popularity){
      return -1;
  }else{
      return true;
  }

})
console.log("\n")
console.log("##################################################################")
console.log("\n")


console.log("Ranking TOP 5 com mais POPULARIDADE")

for(let i =0; i< 5; i++){
    console.log("Posição no Ranking: " + (i+1)+"° lugar")
    console.log("Artista: "+novoJson[i].nome + "\nSeguridores: " + novoJson[i].followers + "\nPopularidade: " + novoJson[i].popularity )
    console.log('\n')
}

console.log("\n")
console.log("##################################################################")

