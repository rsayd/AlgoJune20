// for(var i = 0; i < pokemon.length; i++) {
//     if (pokemon[i].id > 99) {
//         console.log(pokemon[i].name);
//     }
    // console.log(pokemon[i].id)
// }

// Challenges - using the array of pokémon above and loops:
// 1. console.log the pokémon objects whose id is evenly divisible by 3
for(var i = 0; i < pokemon.length; i++){
    if(pokemon[i].id % 3 == 0){
        console.log(pokemon[i].name);
//     }
// }


// 2. console.log the pokémon objects that have more than one type
for(var i = 0; i < pokemon.length; i++){
    if(pokemon[i].types.length > 1){
        console.log(pokemon[i].name);
//     }
// }
// 3. console.log the names of the pokémon whose only type is "poison"
for(var i = 0; i < pokemon.length; i++){
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] === "poison"){
        console.log(pokemon[i].name);
    }
}

// 4. console.log the first type of all the pokémon whose second type is "flying"
for(var i = 0; i < pokemon.length; i++){
    if(pokemon[i].types.length > 1 && pokemon[i].types[1] == "flying"){
        console.log(pokemon[i].types[0]);
    }
} 

// BONUS Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
for(var i = 0; i < pokemon.length; i++){
    var newname = "";
    if(pokemon[i].types.length == 1 && pokemon[i].types == "poison"){
        for(var x = pokemon[i].name.length-1; x >= 0; x--){
            newname += pokemon[i].name[x];
        }
        console.log(newname)
    }