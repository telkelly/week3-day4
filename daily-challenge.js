let sentence = 'Mushrooms are not that bad if they fried';

let wordNot = sentence.search('not')
let wordBad = sentence.search('bad')

if (wordNot < wordBad) {
    console.log(sentence.replace("not that bad", "good"));
} else {
    console.log(sentence);
}
