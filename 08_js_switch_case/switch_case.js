
let Marks = 26
// This is a example of Switch Case Statement.
switch(true){

  case (Marks <= 100 && Marks >= 80) :
    document.write('A+');
  break;
  
  case (Marks <80 && Marks >= 70) :
    document.write('A-');
  break;

  case (Marks <70 && Marks >= 60) :
    document.write('A')
  break;

  case (Marks <60 && Marks >= 50) :
    document.write('B')
  break;

  case (Marks <50 && Marks >= 40) :
    document.write('C')
  break;

  case (Marks <40 && Marks >= 33) :
    document.write('D')
  break;

  default :
    document.write('F');

};