let cars = [5000, 5000, 10000, 16000, 25000, 35000, 50000, 10000, 16000, 25000, 35000, 50000,70000, 15000]

let cheap = cars.filter(item => item <= 35000)

console.log(cheap);


let names = ['Peter', "Graham", 'Chloe', 'Andrew', 'Blanche', 'Theresa', 'Gerald', 'Jonathan', 'Howard', "Stephen", 'Nicholas', "Henry"]

names.sort((a, b) => a.length - b.length)

console.log(names);
   console.log(
    "Самое длинное имя Nicholas & Jonathan" 
   );



let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

if(arr.includes(item => item.typeOf('number'))){
  alert('Good')
}

console.log(arr)