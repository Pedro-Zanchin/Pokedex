var formSearch = document.querySelector('form');

formSearch.addEventListener('submit', function(e){

    e.preventDefault();

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    let name = document.getElementById("namePokemon");
    let image = document.getElementById("imgPokemon")
    let imageType = document.getElementById("imgType");
    let content = document.getElementById("contPokemon");
    let html = "";
    let type = "";
    let blank = "";

    urlForm = urlForm + name.value.toLocaleLowerCase();

    fetch(urlForm)
    .then(content => content.json())
    .then(function(data) {
        console.log(data);
        html = "Nome: " + data.name.toUpperCase() + "<br>";
        for(var i = 0; i <= 2; i++){
            if(i == 0){
                html = html + "Tipos: " + data.types[i].type.name.toUpperCase();
                switch (data.types[i].type.name) {
                    case 'normal':
                        type = "<img src='images/types/normal.webp' class='type1'>";
                        break;
                    case 'bug':
                        type = "<img src='images/types/bug.webp' class='type1'>";
                        break;
                    case 'dark':
                        type = "<img src='images/types/dark.webp' class='type1'>";
                        break;  
                    case 'dragon':
                        type = "<img src='images/types/dragon.png' class='type1'>";
                        break;     
                    case 'electric':
                        type = "<img src='images/types/electric.webp' class='type1'>";
                        break;
                    case 'fairy':
                        type = "<img src='images/types/fairy.png' class='type1'>";
                        break;
                    case 'fighting':
                        type = "<img src='images/types/fighting.webp' class='type1'>";
                        break;
                    case 'fire':
                        type = "<img src='images/types/fire.png' class='type1'>";
                        break;
                    case 'flying':
                        type = "<img src='images/types/flying.webp' class='type1'>";
                        break;
                    case 'ghost':
                        type = "<img src='images/types/ghost.webp' class='type1'>";
                        break;
                    case 'grass':
                        type = "<img src='images/types/grass.png' class='type1'>";
                        break;
                    case 'ground':
                        type = "<img src='images/types/ground.webp' class='type1'>";
                        break;
                    case 'ice':
                        type = "<img src='images/types/ice.webp' class='type1'>";
                        break;
                    case 'poison':
                        type = "<img src='images/types/poison.webp' class='type1'>";
                        break;
                    case 'psychic':
                        type = "<img src='images/types/psychic.webp' class='type1'>";
                        break;
                    case 'rock':
                        type = "<img src='images/types/rock.webp' class='type1'>";
                        break;
                    case 'steel':
                        type = "<img src='images/types/steel.webp' class='type1'>";
                        break;
                    case 'water':
                        type = "<img src='images/types/water.png' class='type1'>";
                        break;
                    default:
                        console.log('Sorry');
                }
            }
            else{
                if(data.types[i]){
                    html = html + " e " + data.types[i].type.name.toUpperCase();

                    switch (data.types[i].type.name) {
                        case 'normal':
                            type = type + "<img src='images/types/normal.webp' class='type2'>";
                            break;
                        case 'bug':
                            type = type + "<img src='images/types/bug.webp' class='type2'>";
                            break;
                        case 'dark':
                            type = type + "<img src='images/types/dark.webp' class='type2'>";
                            break;  
                        case 'dragon':
                            type = type + "<img src='images/types/dragon.png' class='type2'>";
                            break;     
                        case 'electric':
                            type = type + "<img src='images/types/electric.webp' class='type2'>";
                            break;
                        case 'fairy':
                            type = type + "<img src='images/types/fairy.png' class='type2'>";
                            break;
                        case 'fighting':
                            type = type + "<img src='images/types/fighting.webp' class='type2'>";
                            break;
                        case 'fire':
                            type = type + "<img src='images/types/fire.png' class='type2'>";
                            break;
                        case 'flying':
                            type = type + "<img src='images/types/flying.webp' class='type2'>";
                            break;
                        case 'ghost':
                            type = type + "<img src='images/types/ghost.webp' class='type2'>";
                            break;
                        case 'grass':
                            type = type + "<img src='images/types/grass.png' class='type2'>";
                            break;
                        case 'ground':
                            type = type + "<img src='images/types/ground.webp' class='type2'>";
                            break;
                        case 'ice':
                            type = type + "<img src='images/types/ice.webp' class='type2'>";
                            break;
                        case 'poison':
                            type = type + "<img src='images/types/poison.webp' class='type2'>";
                            break;
                        case 'psychic':
                            type = type + "<img src='images/types/psychic.webp' class='type2'>";
                            break;
                        case 'rock':
                            type = type + "<img src='images/types/rock.webp' class='type2'>";
                            break;
                        case 'steel':
                            type = type + "<img src='images/types/steel.webp' class='type2'>";
                            break;
                        case 'water':
                            type = type + "<img src='images/types/water.png' class='type2'>";
                            break;
                        default:
                            console.log('Sorry');
                    }
                }
            }
        }
        html = html + "<br>";
        imageType.innerHTML = type;
        image.innerHTML = "<img src='" + data.sprites.front_default + "' class='normal'><img src='" + data.sprites.front_shiny + "' class='shiny'>";

        content.innerHTML = html;
    })
    .catch(function(err) {
        console.log(err);
        if(err == 'SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data'){
            html = 'Esse pokemon não existe!';
            image.innerHTML = blank;
            imageType.innerHTML = blank;
        } else if(err =='TypeError: data.name is undefined'){
            html = 'Digite algo!';
            image.innerHTML = blank;
            imageType.innerHTML = blank;
        }  else {
            html = 'Erro' + err;
            image.innerHTML = blank;
            imageType.innerHTML = blank;
        }
        content.innerHTML = html;
    })
})