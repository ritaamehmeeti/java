// $(window).ready(function(){
//     alert("its working");
// })

$('li').click(function(){
    alert("click");
});


$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text("test1");
    $('#h1').append("test2");
});

$('#btn2').on("click",function(){
    console.log("the second button is clicked");
});

$('#myDiv').click(function(){

    $(this).addClass("clicked");
})
.find('span')
.attr('title','Hover over me');

$("#btn3").click(function(){
    //$(".hidden").show();
    //$(".hidden").show(300);
    $(".hidden").show('slow');
})
$("#btn4").click(function(){
    $(".hidden").hide();
});

$("#square").click(function(){
    $("#square").animate({
        'width':'200px',
        'height':'200px'
    })
})

// $("#testing").click(function(){
//     $("#testing").animate({
//         'width':'200px',
//         'height':'200px'
//     })
// })


$(".testing").click(function(){
    $(".testing").animate({
        'left':'+=50px',
        'opacity':0.25,
        'fontSize':'30px'
    },300,
    function(){
        console.log("animation is completed");
    }

    );
})
