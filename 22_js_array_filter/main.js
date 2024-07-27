// This is a example how array filer() method works.
let numArray = [30, 32, 40, 55, 62, 70];

let result = numArray.filter(function(item){
  
  return item > 50
});

document.write(result);