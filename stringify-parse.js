const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
const personStr = JSON.stringify(person)
const objPerson = JSON.parse(personStr)
console.log(personStr,objPerson)
  