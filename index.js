

//1. Write to .txt file
//Create a function that writes all numbers between given 2 values in a text(txt) file.

//_Example: writetext(22,55)

const fs = require('fs');

const writetext = (one,two) => {
    let myNum=[];
    for(let i = one; i <= two; i++){
        myNum.push(i);
    }
   return myNum;
}

fs.writeFile('num.txt', writetext, (err) => {
    if (err) throw err;

    console.log('writetext saved!');
});

console.log(writetext(22,55));







//. Read from .txt file
//Create a function that gets the content of given text file and prints it on the console.

//_Example: printText('mytextFile.txt')

var fs = require('fs');

function printText(string){
    var text = fs.readMyFile(string);
    console.log(text.data());
}
printText('myTextfile.txt')



//3. Merge files
//Create a function that gets the content of given text files and creates a new file with all the content.

//_Example: mergeFiles('mytextFile.txt', 'yourTextFile.txt')




//4. Using external module
//Install and import moment.js(a js libary) via NPM and create a function that prints the day name of X(given number as an argument) days later on the console by using moment.js

//_Example: getFutureDay()

var moment = require('moment');

const getFutureDay = day =>{
    console.log("Day: "  +  moment(day).format('dddd'));

}
getFutureDay(5);





