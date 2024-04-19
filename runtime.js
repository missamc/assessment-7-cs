const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Results for the extraLargeArray: insert 874.6717 ms, append 2.1455 ms => Insert = O(n2), Append = O(n)
//Results for the largeArray: insert 8.8473 ms, append 667.6 μs
//Results for the mediumArray: insert 190.1 μs, append 153.6 μs
//Results for the smallArray: insert 47.4 μs, append 108.3 μs
//Results for the tinyArray: insert 36.9 μs, append 80.6 μs

//From the results, the information I have gathered is that whatever function has a result of a faster speed time to achieve the very result, this is better. We can tell this because of how the line shows on a graph. While both methods might start out the same, even though the method with more steps might seem like it would take longer from afar, when we analyze the steps that are occuring to get to the result, what matters is the method that is occuring. So inthe longer looking equation, it is taking more ideal steps to achieve the results in a more desirable way because it is a more efficient method ultimately in the end. The steps the shorter equation would take are infact even longer than the other. We will see this on the graph, where, even though they both might start in the same place, it is the end result that will ultimately matter. The push result will be more constant, whereas the unshift method will become more steep, causing more time to occur to reach the end result, which is not ideal.


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// const numsArray = [1, 2, 3, -2]


// function addToZero(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === 0)
//         return 'true'
//     else return 'false'

    
//     }

//     console.log(addToZero())
// }

//ANOTHER ATTEMPT

const numsArray = [1, 2, 3, -2]

function addToZero(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0)
        return 'true'
    else return 'false'

    
    };

    console.log(addToZero());
}


addToZero(numsArray);


//I believe the runtime for this code would be O(n)


//NEW

// const numsArray = [1, 2, 3, -2]




// const twoSum = function(nums, target){
//     const previousValues = {}
//         for (let i = 0; i < nums.length; i++) {
//             const currentNumber = numsArray[i]
//             const neededValue = target - currentNumber
//             const index2 = previousValues[neededValue]
//             if (index2 != null) {
//                 return 'true'
//             } else {
//                 'false'
//             }
//         }
     
//     }


//     console.log(twoSum(numsArray))

// function pangramSentence(string) {
//     const test = (string) => {
//         if(typeof string !== 'string'){
//             return
//         }
//     }
// }

//NEW

let strArr = string.toLowerCase();
let alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split('');

let isPangram = 'The quick brown fox jumps over the lazy dog.'


function isPangram(string){
    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram)


// I believe the runtime for this code would be O(n log n)



wordsArr = ["hi", "hello"]

function findLongestWord(str){
    const splStrArray = str.split('');

    let longestWord = "";
    for(let i = 0; i < splStrArray.length; i++){
        if(splStrArray[i].length > longestWord.length){
            longestWord = splStrArray[i];
        }
    }
    return longestWord
}

findLongestWord(wordsArr)

//I beleive the runtime for this code would be O(log n)


let singleWordStr = 'Monday'



function hasUniqueChars(string){
    for( let i = 0; i < string.length; i++ ) {
        if( string.indexOf(string[i]) !== i){
            return false
        }
        return true
    }
}
console.log(hasUniqueChars(singleWordStr))

//I believe the runtime for this code would be O(n2)
