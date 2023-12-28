
/*
Trying to generate playing cards (like Dobble)
1- it gets cards with different symbols (to be checked, not working properly)
2- TODO: it checks if every card is unique 
3- DONE: it checks if every card have 1 symbol in common with other cards
*/

// symbols:
const allsymbols =["A","B","C","D","E","F","G","H","I","J"];

// max symbols
const maxsymbols= 5;
// cards total number:
const num_cards = 15;
// symbols number for each card:
const num_symbcard = 5;

//initialization:
const symbols= allsymbols.slice(0, maxsymbols-1);
var maxiterations = 0;
var random = 0;
var results = "";

// define card array:
var card = new Array(num_symbcard);
var cards = new Array(num_cards);

// summary:
console.log("####  INPUTS  ###")
console.log("maxsymbols: "+maxsymbols)
console.log("num_cards: "+num_cards)
console.log("num_symbcard: "+num_symbcard)

// iterate evey card
for (let i = 0; i < num_cards; i++) {
  cards[i] = "";
  maxiterations = 0;
  // iterate every symbols on each card:
  for (let p = 0; p < num_symbcard; p++) {
 
     // randomize next symbol, avoiding 2 times the same symbol on a cards:
   card[p]=symbols[Math.floor(Math.random() * symbols.length)];
     
        // testing unicity 
    var testunique=(cards[i]).includes(card[p]); 

     // change current symbol if aready exist:
   while (p!=0 && testunique && maxiterations<10) { 

    card[p]=symbols[Math.floor(Math.random() * symbols.length)];

    // testing univity 
    testunique=(cards[i]).includes(card[p]);

    // forced Stop
    maxiterations=maxiterations+1;
   }
   
   // resulting array, concatenated:
   cards[i] = cards[i]+card[p];

  }

// concanetatz for log
results = results+" - "+ cards[i];
}

// cards
console.log("cards list: "+results); 

// check evey card have 1 symbol in common
for (let j = 0; j < cards.length; j++) {
  for (let k = 0; k < cards.length; k++) {
    
    if (anythingInCommon(cards[j], cards[k])) { //at least one symbol in common:
     // console.log(cards[j]+" OK "+ cards[k])
      }else{
        // not ok
      console.log(
        "cards not compatible, to eliminate: "+
        cards[j]+" ! "+ cards[k]
        )
    }
  
  }
  
}
/*
This function check if two strings have common characters 
source: https://stackoverflow.com/questions/20675621/fast-way-to-find-if-two-strings-have-a-character-in-common#20675760

eg.
anythingInCommon("aaaaaaaaaaaaaabbbbbbccccc", "xax")
*/
function anythingInCommon(a, b){
    if( b.length < a.length )
        return anythingInCommon(b, a)

    for( var i = 0, len = a.length; i < len; i++ ) 
        if(b.indexOf(a[i]) != -1)
            return true;
  
    return false
}

