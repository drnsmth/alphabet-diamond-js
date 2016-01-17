'use strict';

let extractValidArg = (index) => {
  if ((process.argv.length != 3) || (!process.argv[2].match(/^[A-Za-z]$/))){
    console.log("INVALID INPUT");
    console.log("Usage: go <A-Z>");
    process.exit(1);
  }

  return process.argv[2].toUpperCase();
}

let range = function(from, to) {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let start = ALPHABET.indexOf(from);
  let end = ALPHABET.indexOf(to);

  return (start > -1 && end > -1) ? ALPHABET.slice(start, end + 1) : [];
}

let first = (col) => col[0]; 
let initial = (col) => col.slice(0, col.length - 1);
let rest = (col) => col.slice(1, col.length);

let ordinal = (letter) => letter.charCodeAt(0) - 'A'.charCodeAt(0);
let inner = (letter) =>  ordinal(letter) * 2 - 1;
let outer = (letter, maxWidth) => Math.abs(Math.ceil(maxWidth / 2) - (ordinal(letter) + 1));

let pad = (amount) => ' '.repeat(amount);
let line = (ch, maxWidth) => pad(outer(ch, maxWidth)) + ch + ((inner(ch) >= 0) ? pad(inner(ch)) + ch : ''); 

let lettersToLines = function(letters, maxWidth) {
  return (letters.length) ?  [line(first(letters), maxWidth)].concat(lettersToLines(rest(letters), maxWidth)) : [];
}

let diamond = function(letters) {
  let allLetters = letters.concat(initial(letters).reverse());
  lettersToLines(allLetters, allLetters.length).forEach((l) => { console.log(l); });
}

diamond(range('A', extractValidArg(2)));

