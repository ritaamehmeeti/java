// function printName(){
//     document.write("john");
//     document.write("<br>");
//     setTimeout(function() { document.write("anna")}, 3000);
//     document.write("hans");
// }

// printName();

var colors=["red", "green","blue","purple"];

function changebg(){
    document.querySelector('body').style.background =
    color[Math.floor(Math.random()*colors.length)];
}


var names=["rita", "jona","joni","bleart"];

function changename(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)];
}
setInterval(changebg,1000);
setInterval(changename,1000);