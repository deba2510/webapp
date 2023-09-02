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
    displayName = userName ?? "Guest";
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
const colorsArray = [...colors];

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);
