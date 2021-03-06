var pokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartotle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetails", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parsect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr.mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];
var docUserGuess = document.getElementById("user-guess"); //used to display the user guess
var docPokemonDisplay = document.getElementById("word-display") //used to display the pokemon
var guessLog = document.getElementById("guess-log");
var guessRemain = document.getElementById("guess-remain");
var userGuess = []; //used to log user guesses
var pokemonDisplay = [] //used to create the _ string to be displayed
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", "'"];
var stringCheck = false;
var guessDup = false; //guessDup set to false
var loserCounter = 0; //loserCounter set to 7 at start
var pokemonWord;

//if (loserCounter === 0) {
  
  var pokeRan = Math.floor(Math.random() * pokemon.length); //randomizes a number between 0 and 151 to select a certain pokemon

  var pokemonWord = pokemon[pokeRan];
  console.log("pokemon: " + pokemonWord);
  
  for (var i = 0; i < pokemonWord.length; i++) { //adds a _ for each letter in the pokemon name
    pokemonDisplay.push("_");
  }

  docPokemonDisplay.textContent = pokemonDisplay.join(" ");

  loserCounter = 7;

  //console.log("If statement ran");

//}


document.onkeyup = function(event) {

  console.log(pokemonDisplay.join(""));
  if (loserCounter === 0 || pokemonDisplay.join("") === pokemonWord) {
  
    var pokeRan = Math.floor(Math.random() * pokemon.length); //randomizes a number between 0 and 4 to select a certain pokemon
    console.log("random " + pokeRan);

    pokemonWord = pokemon[pokeRan];
    console.log("pokemon: " + pokemonWord);
    
    pokemonDisplay = [];
    userGuess = [];
    docUserGuess.textContent = "";

    //pokemonWord = "scyther";

    for (var i = 0; i < pokemonWord.length; i++) { //adds a _ for each letter in the pokemon name
      pokemonDisplay.push("_");
    }

    docPokemonDisplay.textContent = pokemonDisplay.join(" ");

    loserCounter = 7;

    console.log("if statement ran");

  } 

  var userGuessKey = event.key.toLowerCase();

  alphabet.forEach(function(str) { //runs through the alphabet
    
    if (userGuessKey === str) { //checks to see if a letter of the alphabet has been chosen

      stringCheck = false;

      for (var i = 0; i < userGuess.length; i++) { //checks to see if a letter has been duplicated
        if (userGuess[i] === userGuessKey) {
          guessDup = true;
          break;
        } else {
          guessDup = false;
        }
      }

      if (guessDup === false) { //if no duplicate chosen, continue

        docUserGuess.textContent = userGuessKey;

        userGuess.push(userGuessKey); //adds each letter to the guess log

        for (var j = 0; j < pokemonWord.length; j++) {
          if (userGuessKey === pokemonWord[j]) {
              stringCheck = true;
              pokemonDisplay[j] = userGuessKey;
              docPokemonDisplay.textContent = pokemonDisplay.join(" ");
          }
        }

        // userGuess.forEach(function(str) {
          
        //   console.log(str)
          
        // })
        
      } else if (guessDup === true) { //if duplicate chosen, do not run
          docUserGuess.textContent = userGuessKey + " already chosen.";
          stringCheck = true;
      }

      if (stringCheck === false) {
          loserCounter--;
          console.log(loserCounter);
      }
    }
    guessRemain.textContent = loserCounter;
    guessLog.textContent = userGuess.join(", ");

  }) 
}