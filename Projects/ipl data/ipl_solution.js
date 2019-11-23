/*
In this data assignment you will transform raw data of IPL to calculate the following stats:
1. Number of matches played per year for all the years in IPL.
2. Number of matches won of per team per year in IPL.
3. Extra runs conceded per team in 2016
4. Top 10 economical bowlers in 2015
*/

//Importing the libraries
const fs= require("fs");
const csv = require ("fast-csv");

//Reading matches csv file
fs.createReadStream('./matches.csv')
  .pipe(csv.parse({ headers: true }))
  .on('data', row => {
    matchSeason(row.season),
    matchWin(row.season,row.winner)
    runsConceded(row.id,row.season)
    topEconomial(row.id,row.season)
})
.on('end',()=>{
    seasonStatsPrint();
    seasonTeamwinPrint();
});

//Reading deliveries csv file
fs.createReadStream('./deliveries.csv')
.pipe(csv.parse({headers: true}))
.on('data',row => {
    extraRunConceded(row.match_id,row.bowling_team,row.extra_runs);
    topEconomialBowlers(row.match_id,row.bowler,row.wide_runs,row.noball_runs,row.total_runs);
})
.on('end',()=>{
    runsConcededPrint();
    topEconomialBowlersPrint()
});

//declared global variables
let seasonStats={};
let winningStats={};
let extraRuns={};
let matchID16=[];
let matchID15=[];
let economicalBowlers={};
let bowlerEconomy={};

//Logic Part of the questions
//1
const matchSeason = (season) => {
    if (seasonStats[season]===undefined){
        seasonStats[season]=1;
    }else{
        seasonStats[season]+=1;
    }
};

//2
const matchWin=(season,winner) => {
    if (winningStats[season]===undefined){
        winningStats[season]={};
    }
    if (winningStats[season][winner]===undefined){
        winningStats[season][winner]=1;
    }else{
        winningStats[season][winner]+=1;
    }
};

//3
const runsConceded=(id,season)=>{
    if (season==='2016'){
        matchID16.push(id);
    }
};

const extraRunConceded=(id,team,extra_runs)=>{
    if(matchID16.includes(id)){
   if(extraRuns[team]===undefined){
       extraRuns[team]=Number(extra_runs);
   }else{
       extraRuns[team]=extraRuns[team]+Number(extra_runs);
   }
}
}

//4
const topEconomial=(id,season) => {
    if (season==='2015'){
        matchID15.push(id);
}
}

const topEconomialBowlers = (id,bowler,wide,noball,total_runs) => {
    if(matchID15.includes(id)){
        if(economicalBowlers[bowler]===undefined){
        economicalBowlers[bowler]={'balls':0,'runs':0};
    }
    economicalBowlers[bowler]['balls']+=1;
    economicalBowlers[bowler]['runs']+=Number(total_runs);
    if (Number(wide)||Number(noball)){
        economicalBowlers[bowler]['balls']-=1;
    }
}
}


//Printing part of the questions
//1
const seasonStatsPrint=() => {
    for(let i in seasonStats)
    {
        console.log(`In season: ${i} number of total matches were: ${seasonStats[i]}`);
    }
}

//2
const seasonTeamwinPrint=()=>{
    for (let i in winningStats)
    {
    console.log(`\nFor season ${i} the stats for matches won by teams are as follows:`);
    for (let j in winningStats[i])
    {
        if (j!==""){
        console.log(`${j} won: ${winningStats[i][j]} matches`);
    }
}
}
}

//3
const runsConcededPrint=()=>{
     console.log(`\n Most extra runs conceded in year 2016 by teams are as follows:`) ;
     for (let i in extraRuns)
 {
     console.log(`${i} : ${extraRuns[i]}`);  
}
}

//4
const topEconomialBowlersPrint=()=>{
    console.log(`\nThe top 10 economical bowlers in year 2015 are as follows: `);
    for (let i in economicalBowlers){
        economy=(Math.round(economicalBowlers[i]['runs']/(economicalBowlers[i]['balls']/6)*100))/100;
    bowlerEconomy[economy]=i;
    }
    let eSort= Object.keys(bowlerEconomy);
    eSort.sort((a,b)=>a-b);
    for (let i=0;i<10;i++)
    {
        console.log(`${bowlerEconomy[eSort[i]]} : ${eSort[i]}`)
    }
}
