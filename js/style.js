let aboutSection =$("#about").offset().top;
console.log(aboutSection);
$(window).scroll(function(){
    let aaa= $(window).scrollTop();
    console.log(aaa);
     if(aaa > aboutSection-90){
        $(".navbar").css({"background-color" : "rgba(0,0,0,0.7)"})
        $(".navbar").css({"padding" : "0px 160px"})
        $("#backToTop").fadeIn(2000)
    }else{
        $(".navbar").css({"background-color" : "transparent"}) 
        $(".navbar").css({"padding" : "0px"})
        $("#backToTop").fadeOut(2000)
    } 
})
// ^start click backtotop
$("#backToTop").click(function(){
    console.log("asf");
    $("html ,body").animate({scrollTop:0},200) 
})


/* $(".navbar-nav a[href^='#']").click(function(e){
    let targetSection =$(e.target).attr("href")
    
    let targetOffset =$(targetSection).offset().top
    $("html ,body").animate({scrollTop:targetOffset},200) 
    $(e.target).$(".navbar-nav").css("border-bottom","5px solid blue")
}) */
// ^start loader
$(window).ready(function(){
    $(".sk-circle").fadeOut(200,function(){
        $("#loader").remove()
        $("body").css({"overflow": "auto"})
        $('.skitter-large').skitter({
            with_animations:["paralell", "glassBlock", "swapBars"]
        });
    })

    var typed = new Typed('#element', {
        strings: [' WEB DEVELOPER ', ' DESIGNER'],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        smartBackspace: false,
      });
      AOS.init();

})
// ^start color box
let colorBoxWidth=$(".color-option").innerWidth()
$("#color-box").animate({left: -colorBoxWidth},200)
$("#gearBox").click(function(){
let colorBoxWidth=$(".color-option").innerWidth()
let offsetLeft=$("#color-box").offset().left;
if(offsetLeft===0){
    // $("#color-box").css({"left": -colorBoxWidth})
    $("#color-box").animate({left: -colorBoxWidth},200)
}else{
    $("#color-box").animate({left: 0},200)
}

})

for (let i = 0; i < $(".color-option span").length; i++) {
    $(".color-option span").eq(i).css({"background-color":randomColor()})
    
}

function randomColor(){
    let red =Math.floor(Math.random()*255)
    let green =Math.floor(Math.random()*255)
    let blue =Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}
 
 $(".color-option span").click(function(e){
    let targetColor= $(e.target).css("background-color")
    
    $("p,h3,h1,h2,h6,h5,h4,button,a,i,placeholder").css("color",targetColor)
})  