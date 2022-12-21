let students = [
    {
        name: "Shakhboz",
        age: 18,
        gender: "m"
    },
    {
        name: "Alexandr",
        age: 32,
        gender: "m"
    },
    {
        name: "Daler",
        age: 15,
        gender: "m"
    },
    {
        name: "Muzaffar",
        age: 19,
        gender: "m"
    },
    {
        name: "Eldor",
        age: 16,
        gender: "m"
    },
    {
        name: "Ibragim",
        age: 14,
        gender: "w"
    },
    {
        name: "Ravshan",
        age: 18,
        gender: "m"
    },
    {
        name: "Timur",
        age: 19,
        gender: "w"
    },
    {
        name: "Aziz",
        age: 15,
        gender: "w"
    },
    {
        name: "Darya",
        age: 26,
        gender: "w"
    },
    {
        name: "Mukhlisa",
        age: 16,
        gender: "w"
    }
]

let ask = prompt('Please write a name:')

students.filter(student => 
    {if(student.name === ask){

    confirm(students.indexOf(ask) !== 0 ? student.name + ', ' + student.age + ', ' + student.gender + ', ' + "- is this what you have been looking for?" : "Sorry")

    let ask2 = confirm('Do you want to delete ' + student.name + '?')
    if(ask2 === true){
       if (students.indexOf(student) !== -1 ? students.splice(ask2, 1) : ' '){
        console.log(students);
       }; 
    }
}
    })
