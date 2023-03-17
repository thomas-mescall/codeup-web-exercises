"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Q2
let filteredUsers = users.filter(function(user) {
    return user.languages.length >= 3;
})
console.log(filteredUsers);

//Q3
let emailUsers = users.map(function (user) {
    return user.email;
})
console.log(emailUsers);

//Q4
let totalYears = users.reduce(function (acc, user){
    return acc + user.yearsOfExperience;
}, 0);
console.log(totalYears);

let totalAvg = totalYears / users.length;
console.log(totalAvg);

//Q5
let longestE = emailUsers.reduce(function (acc, email){
    if(email.length > acc.length) {
        return email;
    } else {
        return acc;
    };
}, "")
console.log(longestE);
//Q6
let nameList = users.reduce(function (acc, user){
    if(acc === "") {
      return user.name;
    } else {
        return acc + ", " + user.name;
    }
},"");
console.log(nameList);