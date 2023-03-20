"use strict";
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.



// fetch('https://api.github.com/users/+ 'username' +/events/public', {headers: {'Authorization': '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'}})
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

function myGit(username) {
    // let myPromise = new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/'+ username +'/events/public', {headers: {'Authorization': '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'}})
    .then(response => response.json())
            .then(data => console.log(data[0].created_at))
            .catch(error => console.log(error));
        // if(data.username) {
        //     console.log("You found: " + data.username);
        //     resolve();
        // }
        // else{
        //     console.log("That user does not exist");
        //     reject();
        // };
    // });
};
myGit('thomas-mescall');
// myPromise.then() => console.log('resolved');
// myPromise.catch() => console.log('rejected');

