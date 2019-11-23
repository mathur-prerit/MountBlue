//problem link
//https://gist.github.com/sachinmk27/db78c1fa00fac94d88d8740aa6a1c1d9

const _ = require("underscore");

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };



//problems solutions
//1
function keys(obj){
    let myKeys=[];
    myKeys.push(_.keys(obj));
    console.log(myKeys);
}
// keys(testObject);

//2
function values(obj) {
    console.log(_.values(obj));
  }

// values(testObject);

//3
function mapObject(obj,cb) {
  // console.log(obj, cb)
  return _.mapObject(obj, function(val) {
      return val + cb;          
  })
};
console.log(mapObject(testObject,8));

//4
function pairs(obj) {
   console.log( _.pairs(obj));
  }
// pairs(testObject);

//5
function invert(obj) {
    console.log(_.invert(obj));
}
// invert(testObject);