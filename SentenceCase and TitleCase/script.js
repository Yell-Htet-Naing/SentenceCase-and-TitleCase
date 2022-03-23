// Method One for Sentence-Case

let date = prompt(`Write some word to change Sentence-Case`);
let arr = date.toLowerCase().split(''); //look clearly split('') for no space
let first = arr[0].toUpperCase();
let other = arr.slice(1);
let sentenceOne = [first,...other];
let resultOne = sentenceOne.join('');
console.log(resultOne);


//Method Two for Title-Case
let some = prompt("Write one sentence to change Title-Case")
function change(string){
	let sentence = string.toLowerCase().split(' '); //look clearly spllit(' ') for each one word
	for(var i = 0;i < sentence.length;i++){
		sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
	}
	sentence.join(" ");
	return sentence;
}
let resultTwo = change(some).join(' ');
console.log(resultTwo);