
let B;

for(B = 0; B < 10; B = B + 1){
  //This is a example of Continue.
  if(B === 3 || B === 6 || B === 9){
    continue;
  };
  //This is a example of Break.
  if(B === 4){
    break;
  };
  document.write(B + "<button>Submit</button> <br>")
};