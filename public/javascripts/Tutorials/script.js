// Promise function
let passedTest = true;

// function passedTestPromise() {
//     return new Promise(function (resolve, reject) {
//         if (passedTest === true) {
//             resolve("Passed the test!");
//         }
//         else {
//             reject("Oh no , I failed the test");
//         }
//     });
// }

// passedTestPromise().then(function (message) {
//     console.log("THEN: " + message);
// }).catch(function (error) {
//     console.log("ERROR: " + error);
// });

// Callbacks function
// function passedTestCallback(success, error) {
//     if (passedTest === true) {
//         success("Passed the test! CB");
//     }
//     else {
//         error("Oh no , I failed the test CB");
//     }
// }

// passedTestCallback(function (message) {
//     console.log("SUCCESS: " + message);
// }, function (errorMessage) {
//     console.log("ERROR: " + errorMessage);
// });

let url = "https://api.github.com/users/google";

fetch(url).then(data => data.json()).then(response => console.log("GOOGLE'S GITHUB BIO: ", response.bio));