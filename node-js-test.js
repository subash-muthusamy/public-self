var jsonVar = {
    "obj1": [
        {
            "obj1Set1Name": "Julius",
            "obj1Set1Number": 100,
            "obj1Set1Boolean": true
        },
        {
            "obj1Set2Name": "Julius",
            "obj1Set2Number": 100,
            "obj1Set2Boolean": true
        }
    ],
    "obj2": [
        {
            "obj2Set1Name": "Julius",
            "obj2Set1Number": 100,
            "obj2Set1Boolean": true
        },
        {
            "obj2Set2Name": "Julius",
            "obj2Set2Number": 100,
            "obj2Set2Boolean": true
        }
    ]
}


console.log(jsonVar);

var jsonString = JSON.stringify(jsonVar);

console.log(jsonString);

console.log(jsonVar);

console.log(JSON.parse(jsonString));

console.log("Test");

console.log("Test3");