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
    document.querySelector(".example").addEventListener('click', function(event){
        console.log(event.srcElement);
    });
    
    // ARRAY DESTRUCTURING
    [firstElement, secondElement, ...restElementList] = arrayList;
    console.log("first element = " + firstElement + ", seconde element = " + secondElement);
    console.log("REST OF THE ARRAY = " + restElementList);
    
    // OBJECT DESTRUCTURING
    const employeeDetails = {
        name: "Debangshu",
        employeeNo: "60003354",
        department: "ISD",
        phoneNo: 9804890013
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
