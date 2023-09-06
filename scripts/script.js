"use strict";
// SPREAD OPERATOR
function arrayListFunction(...arrayList){
    // FOR EACH
    arrayList.forEach(function(element){
        console.log(element);
    });

    // MAP
    let secondList = arrayList.map(function(element){
        return element*10;
    });
    console.log("MAP OUTPUT : " + secondList);
    
    // FILTER
    secondList = arrayList.filter(function(element){
        return element < 4;
    });
    console.log("FILTER OUTPUT : " + secondList);
    
    // REDUCE
    console.log("REDUCE OUTPUT : " + arrayList.reduce(function(sum,element){
        return sum + element;
    },0));

    // FIND
    console.log("FIND OUTPUT : " + arrayList.find(function(element){
        return element % 5 === 0;
    }));

    // EVERY
    console.log(arrayList.every(function(element){
        return (element < 10);
    }));

    // SOME
    console.log(arrayList.some(function(element){
        return (element > 7);
    }));

    // CONCAT
    console.log(arrayList.concat([13,7]));

    // FLATMAP
    console.log("FLATMAP OUTPUT : " + arrayList.flatMap(function(element){
        return [element,2*element];
    }));

    // DOCUMENT QUERY SELECTOR
    document.querySelector("#BSBHeader").addEventListener('click', function(event){
        console.log(event.target);
    });
    
    // ARRAY DESTRUCTURING
    let firstElement;
    let secondElement;
    let restElementList;
    [firstElement, secondElement, ...restElementList] = arrayList;
    console.log("first element = " + firstElement + ", seconde element = " + secondElement);
    console.log("REST OF THE ARRAY = " + restElementList);
    
    // OBJECT DESTRUCTURING
    const employeeDetails = {
        name: "Howard",
        employeeNo: "983738",
        department: "ISD",
        phoneNo: 1287456387
    };

    const {department:empDepartment, employeeNo:empEmployeeNo, phoneNo:empPhone, name:empName} = employeeDetails;
    console.log(empName, empEmployeeNo, empPhone,empDepartment);

    // NULLISH COALESCING
    let {name1:userName} = employeeDetails;
    let displayName = userName ?? "Guest";
    console.log("NULLISH COALESCING USER NAME = " + displayName);

};

const arrayRestParameter = function(...listArray){
    return listArray.reduce(function(sum,element){
        return sum + element;
    },0);
};
console.log("SUM USING REST PARAMETER = " + arrayRestParameter(3, 1, 4, 1, 5, 9, 2));
arrayListFunction(3, 1, 4, 1, 5, 9, 2);

const arrayElementSum = function (...arrayList){
    // FOREACH
    let sum = 0;
    arrayList.forEach(function(element){
        sum = sum + element;
    });
    console.log("FOR-EACH OUTPUT = " + sum);

    // FOR OF
    sum = 0;
    for (const element of arrayList) {
        sum = sum + element;
    }
    console.log("FOR-OF OUTPUT = " + sum);

    // NORMAL FOR LOOP
    sum = 0;
    for(let i=0; i < arrayList.length; i++){
        sum = sum + arrayList[i];
    }
    console.log("NORMAL LOOP OUTPUT = " + sum);

    // REDUCE
    console.log("REDUCE FUNCTION OUTPUT = " + arrayList.reduce(function(res,element){
        return res + element;
    },0));

};

arrayElementSum(11, 23, 6, 31, 9, 17);

const testObject = {
    name:"Debangshu",
    printName: function(){
        console.log(this.name);
    },
    printHello: function(){
        console.log("hello world");
    }
};

testObject.printHello();
testObject.printName();

// Enhanced Object Literal (Computed property Name)
const dynamicVar = "username";
const sampleObject = {
    [dynamicVar] : "David",
    empNo : 8777
};
console.log(sampleObject);

// OPTIONAL CHAINING
const withAddFunction = {
    description : "contains-addition-function",
    add : function (a , b){
        return (a + b);
    }
}

const withNoAddFunction = {
    description : "NO-addition-function"
}

console.log(withAddFunction.add?.(2,3));
console.log(withNoAddFunction.add?.(2,3));

const empOne = {
    empNo : 1234,
    name : "David",
    yob : 1989,
    spouse : {
        name : "Angelina",
        yob : 1991
    }
}

const empTwo = {
    empNo : 3476,
    name : "Steve",
    yob : 1988
}

const spouseDetails = function (emp){
    if (emp.spouse?.yob != undefined){
        console.log(emp.name + " is married to " + emp.spouse.name + " who is a " + (2023 - emp.spouse.yob) + "year old");
    }
    else{
        console.log(emp.name + " is not married");
    }
}

spouseDetails(empOne);
spouseDetails(empTwo);


// SET DATASTRUCTURE
const colors = new Set();
colors.add('red');
colors.add('green');
colors.add('blue');
colors.delete('green');
console.log(colors.size);
console.log(colors.has('red')); 
console.log(colors.has('yellow')); 

for (const color of colors) {
    console.log(color);
}
colors.forEach(function(item){
    console.log(item);
});

const colorsArray = [...colors];

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);


// MAP DATASTRUCTURE (KEY VALUE PAIR)
const mymap = new Map();
mymap.set("name", "Sudipta");
mymap.set("age",30);
console.log(mymap.get("name"));
console.log(mymap.has("yob"));
// console.log(mymap);
// mymap.delete("age");
// console.log(mymap);
mymap.set("address","bangalore");
for (let [key,value] of mymap){
    console.log(key + " : " + value);
}

mymap.forEach(function(value,key){
    console.log(key + " : " + value);
});


// FUNCTION DEFAULT PARAMETER
const calculateAge = function(yob){
    return (2023 - yob);
}
const sampleDefParam = function(name="Guest",yob=2000, age=calculateAge){
    console.log(name + " is " + age(yob) + " year old");
}

sampleDefParam("steve",1972);
sampleDefParam();

// Function pass by value (number, string) by reference (array, object)
const stringPassByVal = function (strVar){
    strVar = strVar + "world";
}

let strVar = "hello";
stringPassByVal(strVar);
console.log(strVar);


const numberPassByVal = function (num){
    num = 12;
}
let num = 10;
numberPassByVal(num);
console.log(num);

const arrayPassByRef = function (arr){
    if (typeof arr === "object"){
        arr.push(5);
    }
}

let arr = [1,2,3,4];
arrayPassByRef(arr);
console.log(arr);

// FIRST CLASS and HIGHER ORDER FUNCTION

function sayHello(geetfunc, name){
    geetfunc(name);
}

const greet = function (name){
    console.log('Hello ' + name);
}

sayHello(greet, "Vishal");

// ========

function func1(x){
    return function func2(y){
        return x*y;
    };
}

const var1 = func1(5);
console.log(var1(2));

// ============

const operatorFunc = function(operation, arr){
    let arrayLength = arr.length;
    for(let i=0;i<arrayLength;i++){
        arr[i] = operation(arr[i]);
    }
}

const cube = function (num){
    return Math.pow(num,3);
}

let numberArr = [1,2,3,4,5];

operatorFunc(cube,numberArr);
console.log(numberArr);

//   EVENT LOOP
const sayWelcome = function (name){
    console.log("Hello " + name + " welcome to the world!!");
}

sayWelcome("First");
setTimeout(function(){
    sayWelcome("Second");},
    500);
sayWelcome("Third");

// CALL BACK  FUNCTION WITH ERROR,RESPONSE PARAM
const asyncFunctionExample = function (argv, callback){
    if(typeof argv === "number"){
        setTimeout(function(){
            let response = {
                body : argv + " X " + argv + " = " + Math.pow(argv,2)
            };
            callback(null,response);
        },
        Math.random()*1000);
    }else{
        callback(new Error("the given arguement is not a number"),null);
    }
}


const callbackHandlerExample = function(error, response){
    if (error){
        console.log(error);
        return;
    }
    else{
        console.log(response.body);
    }
}
arr = [1,2,3,4,"bean"];
arr.forEach(function(item){
    asyncFunctionExample(item,callbackHandlerExample);
});

// CALLBACK HELL
const asynFuncPrintNameRandomNum = function (arguement, callback){
    if (typeof arguement === "string"){
        setTimeout(function(){
            callback(null,{body : arguement + " : " + Math.random()*50})
        },
        Math.random()*1000);
    }
    else{
        callback(new Error("Entered arguement is not a string"), null);
    }
}

function callBackHellDemo(){
    asynFuncPrintNameRandomNum("Vishal", function(error,response){
        if(error){
            console.log(error);
            return;
        }
        else{
            console.log(response.body);
            asynFuncPrintNameRandomNum("Ritam",function(error,response){
                if(error){
                    console.log(error);
                    return;
                }else{
                    console.log(response.body);
                    asynFuncPrintNameRandomNum("Anupam",(error,response)=>{
                        if(error){
                            console.log(error);
                            return;
                        }else{
                            console.log(response.body);
                            asynFuncPrintNameRandomNum("Sudip",function(error,response){
                                if(error){
                                    console.log(error);
                                    return;
                                }else{
                                    console.log(response.body);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

callBackHellDemo();

// PROMISE JAVASCRIPT
const myPromiseFuncCall = function (userName){
    return new Promise(function(resolve,reject){
        asynFuncPrintNameRandomNum(userName, function(error,response){
            if(error){
                reject(
                    {
                        description:"Some error has occured!!",
                        eventObj: error
                    }
                );
            }else{
                resolve(
                    {
                        description: "Success!!!",
                        eventObj: response
                    }
                )
            }
        }) 
    });
}

const addPropertyLocationToObject = function(resObj){
    return new Promise(function(resolve){
        resObj.location = "Gurgaon";
        resolve(resObj);
    });
} 

myPromiseFuncCall("DEREK")
.then(addPropertyLocationToObject)
.then(function(result){
    console.log(result.eventObj.body); // DEREK : 48.91740909742737
    console.log(result.description); // Success!!!
})
.catch(function(error){
    console.log(error);
});

// PROMISE CHAINING EXAMPLE2 USING FETCH
import {apiObj} from '../api-secret/secret.js';
const url = "https://api.weatherapi.com/v1/current.json?key=" + apiObj.weatherAPI + "&q=Gurgaon&aqi=yes";
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(function (data) {
    console.log(data.location);
})
.catch(function (error) {
    console.error('There was a problem with the fetch operation:', error);
});

