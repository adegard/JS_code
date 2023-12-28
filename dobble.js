
/*
Trying to generate playing cards (like Dobble)
1- it gets cards with different symbols
z- TODO check taht every card is unique and have 1 symbol in common with other cards

*/

// symbols:
const allsymbols =["A","B","C","D","E","F","G"];

// max symbols
const maxsymbols= 10;
// cards total number:
const num_cards = 20;
// symbols number for each card:
const num_symbcard = 4;

//initialization:
const symbols= allsymbols.slice(0, maxsymbols-1);
var maxiterations = 0;
var random = 0;

// define card array:
var card = new Array(num_symbcard);
var cards = new Array(num_cards);

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
   while (p!=0 && testunique && maxiterations<5) { 

    card[p]=symbols[Math.floor(Math.random() * symbols.length)];

    // testing univity 
    testunique=(cards[i]).includes(card[p]);

    // forced Stop
    maxiterations=maxiterations+1;
   }
   
   // resulting array, concatenated:
   cards[i] = cards[i]+card[p];

  }

console.log("Complete card n."+i+" is: "+cards[i]); 

}

// check evey card have 1 symbol in common
for (let j = 0; j < cards.length; j++) {
  for (let k = 0; k < cards.length; k++) {
    
    if (anythingInCommon(cards[j], cards[k])) { //ok
      console.log(cards[j]+" OK "+ cards[k])
      }else{
      console.log(cards[j]+" ! "+ cards[k])
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

