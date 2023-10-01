"use strict";

import { apiObj } from '../api-secret/secret.js';

const customCreateUserDetails = function(userID){
    // return fetch("https://api.github.com/users/deba2510");
    const userDetails = {
        fName: "Steve",
        lName: "Smith",
        userid: userID
    }
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            const numberIter = Math.round(Math.random()*100);
            if (numberIter % 5 === 0){
                reject(new Error("The random number generated is multiple of 11!! Sorry Bad Luck"));
            }
            else{
                resolve(userDetails);
            }
        }, 1000);
    })
}

customCreateUserDetails(500123)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})

// ASYN/AWAIT
async function fetchGitHubUserData (userName){
    try{
        const response = await fetch("https://api.github.com/users/" + userName);
        if(!response.ok){
            throw new Error(userName + "not found in GITHUB")
        }else{
            const body = await response.json();
            console.log(body);
        }
    }
    catch (error){
        console.log("ERROR = " + error);
    }

}

fetchGitHubUserData(apiObj.userName);


// CONSTRUCTOR FUNCTION AND NEW OPERATOR
const Employee = function (name, empID, yob){
    this.empName = name;
    this.empNo = empID;
    this.YOB = yob;
    this.displayEmpDetails = function(){
        return this.empName + ", (" + this.empNo + ")";
    }    
}

Employee.prototype.calculateAge = function (){
    const age = new Date();
    return age.getFullYear() - this.YOB;
}

const steve = new Employee("Bojak Carrel", "500856", 1988);
const martha = new Employee("Martha Karamazov", "500287", 2000);
console.log(steve.displayEmpDetails() + " is " + steve.calculateAge() + " years old.");
console.log(martha.displayEmpDetails() + " is " + martha.calculateAge() + " years old.");

