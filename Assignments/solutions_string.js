//Problem Link
//https://gist.github.com/sachinmk27/86c80d6b261c7b26dca2c364f718cc58

// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => {
//   Insert function
for (let i=0;i<nums.length;i++){
	if (nums[i].length===1){
		nums[i]='0'+nums[i]
	}
}
}
paddedNum(nums);
console.log(nums);


// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best"
let titleCaseOP;
let final='';
let caseString='';
const titleCase = text => {
//   Insert function
for(let i=0;i<camelCase.length;i++)
{
	if(camelCase[i]!==" " && camelCase[i]===camelCase[i].toUpperCase() && camelCase[i+1]===camelCase[i+1].toLowerCase() && camelCase[i+1]!==" "){
		caseString=caseString+" "+camelCase[i];
	}else{
		caseString=caseString+camelCase[i];
	}
}

titleCaseOP=caseString.toLowerCase();
let x;
x=titleCaseOP.charAt(0).toUpperCase();
final=final+x;
for(let i=1;i<titleCaseOP.length;i++){
	if (titleCaseOP[i-1]===' '){
		x=titleCaseOP.charAt(i).toUpperCase();
	}
	else{
		x=titleCaseOP.charAt(i);
	}
	final=final+x;
}
}
titleCase(camelCase)
console.log(final);


// 3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
let y=[];
let final2='';
const newCamel = text => {

//   Insert function
y=newTitle.split(" ");
for(let i=0;i<y.length;i++){
	if((i+1)%2===0){
		final2=final2+y[i][0].toUpperCase()+y[i].slice(1)+" "
	}else{
		final2=final2+y[i][0].toLowerCase()+y[i].slice(1)
	}
}
}
//final2=final2.charAt(0).toLowerCase() + final2.slice(1);
newCamel(newTitle)
console.log(final2);
// theseWords shouldGo inPairs


// 4. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
let final3=''
const word = "hamlet"
const pigLatin = text => {
//   Insert function
let temp='';
let p;
for(let i=1;i<word.length;i++){
	if (word[i]==='a' || word[i]==='e' || word[i]==='i' || word[i]==='o' || word[i]==='u'){
		temp=word[i];
		p=i}
	
	break;
}
final3=word[p]+word.slice(p+1)+word.substring(0,p)+'ay';
}
pigLatin(word);
console.log(final3);