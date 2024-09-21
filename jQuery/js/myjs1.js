$(document).ready(()=>{

    console.log("this is ajax document ready");

    //=================================
    // hide  show  fadeIn  fadeOut  fadeToggle

    $("#btn1").click(() =>{
        console.log("btn click");
        $("#container").hide();
    })

    $("#btn2").click(()=>{
        $("#container").show();
    })

    $("#btn3").click(()=>{
        $("#container").fadeToggle();
    })

    $("#btn4").click(()=>{
        $("#container").fadeTo(300, 0.5);
    })


    //=================================
    // slideUP  slideDown  slideToggle

    $("#btn5").click(function(){
        $("#container").slideUp();
    })

    $("#btn6").click(function(){
        $("#container").slideDown();
    })


    $("#btn7").click(function(){
        $("#container").slideToggle();
    })


    // ========================================
    // animate
    $("#btn8").click(()=>{
        $("#container").animate({width:"200", height:"200"}, 200, function(){
            alert("width changed .....");
        })
    })

    //=======================================

    $("#btn9").click(()=>{
        // let val = $("#f").val();
        // console.log(val);

        $("#f").val("this val value");

        let c = $(".para").text();
        console.log(c);

        $(".para").html("<b>this is bold line</b>");
    })

    
})