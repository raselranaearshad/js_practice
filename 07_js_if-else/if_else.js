let age = 20
let city = "Dhaka"
// This is a example of if statement.
if(age>18 && city=="Dhaka"){
  document.write("You Are Adult." + "<br>")
};

let Age = 14
let City = "Dhaka"
// This is a example of if else Statement.
if(Age>18 && City=="Dhaka"){
  document.writeln("You Are Adult.")
}
else{
  document.write("You Are Child." + "<br>")
};


let Marks = 26
// This is a example of if else if Statement.
if(Marks >= 80 && Marks <= 100){
  document.write("A+")
}
else if(Marks < 80 && Marks >= 70){
  document.write("A-")
}
else if( Marks < 70 && Marks >= 60){
  document.write("A")
}
else if(Marks < 60 && Marks >= 50){
  document.write("B")
}
else if(Marks < 50 && Marks >= 40){
  document.write("C")
}
else if(Marks < 40 && Marks >= 33){
  document.write("D")
}
else{
  document.write("F")
};