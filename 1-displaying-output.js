///song and artist: All Star  by Smash Mouth

console.log(`Hey now, youre an all-star, get your game on, go play
Hey now, youre a rock star, get the show on, get paid`)

console.log(`my current age is 31`)

let sentence = `I would like to thank my arms for always being by my side, my legs for always supporting me, and my fingers, because I can always count on them.`

let wordslist = sentence.split(" ")


//console.log(wordslist)
let newWord =""
let cl = 5;
for(let i =0; i<wordslist.length; i++){
newWord += wordslist[i]+" ";
if(i == cl ){newWord += "\n"; cl+=5}
}

console.log(newWord)