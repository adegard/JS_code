
/*
Trying to generate playing cards (like Dobble)
- generates cards with different symbols (no double on same card)
- it checks if every card have 1 symbol in common with other cards (to be eliminate)

TODO: it checks if every card is unique 
*/

// symbols:
const allsymbols =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// max symbols to use
const maxsymbols= 20;
// cards number to use:
const num_cards = 30;
// symbols for each card:
const num_symbcard = 7;

//initialization:
const symbols= allsymbols.slice(0, maxsymbols);
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
   while (p!=0 && testunique && maxiterations<20) { 

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
        "cards not compatible: "+
        cards[j]+" ! "+ cards[k]+", please eliminate: "+cards[k]
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

