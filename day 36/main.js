// $(window).ready(function(){
//     alert("its working");
// })

$('li').click(function(){
    alert("click");
})

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text("test1");
    $('#h1').append("test2");
})


$('#btn2').on("click",function(){
    console.log("the second button is clicked")
})


$('#myDiv').click(function(){
    $(this).addClass("clicked");
})

$("#btn3").click(function(){
    
})