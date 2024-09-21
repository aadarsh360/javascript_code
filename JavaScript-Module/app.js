import {firstName as fname} from './utils/fname.js'
import {age} from './utils/age.js';

import something, {Person, Person2} from './utils/Person.js';

console.log(fname, age);

const person = new Person("aadarsh", "pandey", 24);
person.info();

console.log(something);