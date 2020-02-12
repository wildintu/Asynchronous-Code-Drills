//create function that takes a string msg as arugment and logs to console
function random(message) {
    console.log(message);
};
//call function with a message
random('first word');
//use setTimeout to call function again but with diff message
setTimeout(function () {
    random('second word');
}, 2000);
//create new function called getWords
function getWords(word) {
    console.log(word);
}
//have it log word instantly, after 3 sec, after 2 sec, after 1 sec
setTimeout(function () {
    getWords('instant');
}, 0);
setTimeout(function () {
    getWords('3 seconds');
}, 3000);
setTimeout(function () {
    getWords('2 seconds');
}, 2000);
setTimeout(function () {
    getWords('1 second');
}, 1000);
//create function called done and logs Job's Done! to console
function done() {
    console.log("job's done!");
}
//create diff function on global scope called countdown that accepts two arg num and callback
function countdown(num,callback) {
    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countdown(num-1,callback);
        } else {
            callback();
        }
        }, 1000);
}
countdown(10, done);


//create a new global variable called lunchTime with value of true
let lunchTime = true;
const orderMeSomeFood = () => {
    return new Promise((resolve,reject) => {
        
        if (lunchTime == true) {
            let meal = {
                lunch: 'burger',
                drink: 'beer'
            };
            resolve(meal);
    
        } else {
            let err = new Error('No lunch for you!');
            reject(err);
        }
    });
}
orderMeSomeFood().then(res => console.log(res))
orderMeSomeFood().catch(rej => console.log(rej))



