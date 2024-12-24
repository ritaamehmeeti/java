//do while loop

var i = 0;

do{
    i = i + 1;
    console.log(i);
}while(i<5);

console.log("----------");

var j = 0;

while(j < 5){
    j = j + 1;
    console.log(j);
}

console.log("----------");

var students = ["Rita", "Joni", "Loris" , "Jona", "Robert", "Erit" ,"Anes", "Bleart", "Elvis", "Eglandin", "Diar", "Toena", "Olti"];

for(var e=0; e<students.length; e++){
    console.log(students[e]);
}

console.log("----------");

var stu = ["hello","whatsup","music","class"];

var  y;

for(y of stu){
    console.log(y);
}

console.log("----------");


var teksti = "hi there how are you,merry christmas";

var o=0;

for (o of teksti) {
    console.log(o);
}
console.log("----------");


var person ={firstname : "john" ,lastname: "doe", age:32};
