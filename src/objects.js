const createPerson = (name, age) => {
  const person = {};
  person.name = name;
  person.age = age;

  return person;
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) =>
  people.find(person => person.name === name);

const findHondas = cars => cars.filter(car => car.manufacturer === 'Honda');

const averageAge = people =>
  people.reduce((a, b) => a + b.age, 0) / people.length;

const createTalkingPerson = (name, age) => {

};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
