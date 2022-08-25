//Wrapped the entire Get request into a function to make it reusable
//NOTE: callback functions do not mean a call back if it has a parenthesis because it would run automatically callback()
const getTodos = (callback) => {

  //This XMLHttpRequest can use for multiple data types

  const request = new XMLHttpRequest();

  //Request types Post, Get, Put, and More
  //This sets up the request

  //To track status of the request we can use event listener
  //The request.addeventlistener is a function and we are then declaring another function within by using the arrow function method

  //It is important to know the different ready states which are
  //0 Unsent, 1 Opened, 2 Headers_Recieved, 3 Loading, 4 Done

  //We want the DONE state to start doing something with the data

  //This is always listening
  request.addEventListener('readystatechange', () => {

    //Uncomment below if you want to see the XMLHttpRequest
    //  console.log(request, request.readyState);

    //Check if ready state is equal to 4 then you do something with data

    //Just checking if the endpoint is DONE is not enough for validating the request worked
    if (request.readyState === 4 && request.status === 200) {

      callback(undefined, request.responseText);
      //If Succesful complete the below task

    } else if (request.readyState === 4) {

      //If failure notify user
      callback('could not fetch data', undefined)
      console.log('There was a issue, please re run the task. Or contact system administrator if issue persists.')

    }

  }

  );

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
  request.send()
}

//Wrapped the entire Get request into a function to make it reusable





//CALLING The GetToDos with a callback function
//Sends the two inputs into the above 


//Adding asynchronous code to the mix
console.log(1)
console.log(2)

//err and data are being set out side of the function which is why they can be retrieved out side the callback function!
getTodos((err, data) => {

  console.log('callback fired');

  //Add logic to check truthy or falsy if there is a error
  if (err) {

    console.log(err);
  } else {

    console.log(data);

  }

})

console.log(3)
console.log(4)