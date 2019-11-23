//Importing file
let art =require('./art.js');

//User word input
console.log('Selected a random word');
let wordArray =['writer','crypt','akward','Bungler','Banjo','Zombie','ivory','MeMento','Pixel','Rogue','Unzip','Yacht'];
let inputString=wordArray[Math.floor(Math.random() * wordArray.length)];;
inputString=inputString.toLowerCase();

//Turn by turn input
console.log('Player Turn');
const limit=7;
let guessedChar=new Set();
let tempChar;
let tempCharArray=[];
let counter=0;

//loop to push dashes in an empty array
for (let i=0;i<inputString.length;i++)
{
	tempCharArray.push('_');
}

console.log(tempCharArray);
process.stdin.on('data',(data)=>
{
	tempChar = data.toString().charAt(0);
	guessedChar.add(tempChar)
	let charFound=false;

	//loop for iterating through input string
	for(let i=0;i<inputString.length;i++)
	{	
		//Checking if given input char is found in the input string
		if(tempChar===inputString[i])
		{
			tempCharArray[i]=tempChar;
			charFound=true;	
		}
	}

	//Checking flag condition
	if (charFound!==true)
	{
		counter=counter+1;
		printASCII();
	console.log('Opps! wrong input. Lives remaining = '+(limit-counter));
	}
	printASCII();
	console.log (guessedChar);
	console.log(tempCharArray);

	//Program terminating conditions
	if (counter>=limit)
	{
		console.log('You lost the game');
		console.log('Correct Answer is:'+inputString);
		process.exit();
	}
	else if(tempCharArray.join('')===inputString)
	{
		console.log('You won the game');
		process.exit();
	}
});

const printASCII=()=>{
	if(counter===0){
		art.wrong0()
	}
	else if(counter===1){
		art.wrong1()
	}
	else if(counter===2){
		art.wrong2()
	}
	else if(counter===3){
		art.wrong3()
	}
	else if(counter===4){
		art.wrong4()
	}
	else if(counter===5){
		art.wrong5()
	}
	else if(counter===6){
		art.wrong6()
	}
	else if(counter===7){
		art.wrong7()
	}
}