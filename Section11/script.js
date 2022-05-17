
// ----------------------------------login function--------------------------------------
var database = [
    {
        username: "nick",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
];


var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password))
    {
        console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong username and password.");
    }
}

signIn(userNamePrompt, passwordPrompt);


// ------------------------------------loops--------------------------------------------
// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study",
//     "eat healthy"
// ];
// var todosLength = todos.length;
//
// for (var i =0; i < todosLength; i++)
// {
//     console.log(i);
// }

// forEach loop is a simplified for loop
// todos.forEach(function(i) {
//     console.log(i);
// })

// while loop will check condition first and then enter the loop
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }


// do while loop executes once and then checks the condition
// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);