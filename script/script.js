

$(document).ready(function () {
    $("div.design-content").hide();
    $("div.development-content").hide();
    $("div.product-content").hide();

    $("#imgdesign, div.design-content").click(function(){
        $("div.design-content, .design").toggle();

    })

    $("#imgdevelopment, div.development-content").click(function(){
        $("div.development-content, .development").toggle();

    })

    $("#imgproduct, div.product-content").click(function(){
        $("div.product-content, .product").toggle();

    })
    
    });

    // document.getElementById("btn").addEventListener("click". function(){
    //     alert("Thank you for contacting us");
    // });


