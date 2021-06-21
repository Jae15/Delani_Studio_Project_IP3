// $(document).ready(function () {
//     $("div#design-content").hide();
//     $("div#development").hide();
//     $("div#product").hide();

    // $("imgdesign, div#design").click(function () { 
    //     $("imgdesign, div#design").toggle();

    // });

    // $("imgdevelopment, div#development").click(function () { 
    //     $("imgdevelopment, div#development").toggle();

    // });

    // $("imgproduct, div#product").click(function () { 
    //     $("imgproduct, div#product".toggle();

    // });

// });

// document.getElementById("btn").addEventListener("click".function() {
//     alert(Thank you for getting in touch with us!);

// })\

$(document).ready(function () {
    $("div.design-content").hide();
    $("div.development-content").hide();
    $("div.product-content").hide();

    $(".design, div.design-content").click(function(){
        $("div.design-content, .design").toggle();

    })

    $(".development, div.development-content").click(function(){
        $("div.developmenet-content, .development").toggle();

    })

    $(".product, div.product-content").click(function(){
        $("div.developmenet-content, .development").toggle();

    })
    
    });


// $(document).ready(function(){
//     $(".design").click(function(){
//         $(".design-content").show();
//         $(this).hide()
//     })

//     $(".development").click(function(){
//         $(".development-content").show();
//         $(this).hide()
//     })

//     $(".product").click(function(){
//         $(".product-content").show();
//         $(this).hide()
//     })
// })

