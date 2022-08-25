//Example of a timeout asynchronous function.

//Declare function that welcomes new users to the server
function loopThroughArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Hello ${array[i]} welcome to the server!`);
    }
}


//Run First block of code:

console.log('Your welcome messages are being processed.')


//Create callback using a arrow function and the setTimeout Funciton that waits 2000 miliseconds
setTimeout(() => {

    let dataset = ['Jack', 'Johnson', 'Fred']
    loopThroughArray(dataset)

    console.log('Hurray! Your dataset has been succesfully processed and these users are now entered into your system.');
}, 5000);


//Run second block of code (Notice it does not have to wait for the asynchronous javascript above to complete prior to executing)
console.log('PROCESSING...')
console.log('Continue browsing as your request is being processed this will take 5000 milliseconds')