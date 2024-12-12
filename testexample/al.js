const _ = require('lodash');

// Assume only strings, objects, numbers
const input = {
  foo: "bar",
  hi: {
    "this is a number": 123,
    anotherProp: ['yo', 'two']
  }
};

const expectedResults = [
  { 
    key: "foo",
    value: "bar"
  },
  { 
    key: "hi.this is a number",
    value: 123
  },
  { 
    key: "hi.anotherProp[0]",
    value: "yo"
  },
  { 
    key: "hi.anotherProp[1]",
    value: "two"
  }
]

// const flatten = (input) => {
//     const result = [];
//     const recurse = (obj , currentKey) =>{
//         for(const [key,value] of Object.entries(obj)){
//           const newKey = currentKey ? `${currentKey}.${key}` : key;
//           if(typeof value === 'object' && value!=null && !Array.isArray(value)){
//             recurse(value,newKey);
//           }else{
//             result.push({
//               key: newKey,
//               value: value
//             });
//           }
//         }
//     };

//     recurse(input,'');
//     return result;
//   // stuff

// }


// { 
//   key: "hi.anotherProp[0]",
//   value: "yo"
// },
const flatten = (input) => {
  const result = [];
  const recurse = (obj , currentKey) =>{
      for(const [key,value] of Object.entries(obj)){
        const newKey = currentKey ? `${currentKey}.${key}` : key;
        if(Array.isArray(value)){
          value.forEach(
            (item , index) => {
              const arrayKey = `${newKey}[${index}]` //"hi.anotherProp[0]"
              if(typeof item === 'object' && item!=null)
              recurse(item,arrayKey);
            }
          )
        }
        if(typeof value === 'object' && value!=null && !Array.isArray(value)){
          recurse(value,newKey);
        }else{
          result.push({
            key: newKey,
            value: value
          });
        }
      }
  };

  recurse(input,'');
  return result;
// stuff

}
const result = flatten(input);
console.log("result:" , result);

console.log("Did this work: " ,(JSON.stringify(result) === JSON.stringify(expectedResults)) ) 
// console.log("Did this work: " + _.isEqual(expectedResults, flatten(input))); 