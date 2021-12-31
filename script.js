$(document).ready(function(){

    //nav
    $("header nav ul.gnb>li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
       
    }, function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    //lag menu
    $("header .login p").click(function(){
        $(this).toggleClass("on");
        $("header .login ul").stop().slideToggle();
    });


    //slide
    $(".slide ul li").eq(0).siblings().hide();

    var slideAll = 0;

    setInterval(function(){
        if(slideAll<2){
            slideAll++;
        }else{
            slideAll=0;
        }
        $(".slide ul li").eq(slideAll).siblings().fadeOut();
        $(".slide ul li").eq(slideAll).fadeIn();

    },3000);


    //barnd

    var br_name = document.querySelector(".br_name"),
    br_names = document.querySelector(".br_name li"),
        currentIdx= 0,
        br_namesCount = br_names.length,
        prevBtn = document.querySelector(".prev"),
        br_namesWdith = 290,
        br_namesMargin = 10,
        nextBtn = document.querySelector(".next");

        br_name.style.width = (br_namesWdith+br_namesMargin) + br_namesCount - br_namesMargin + 'px';


        function moveSlide(num){
            
            br_name.style.left = -num * 300 + 'px';
            currentIdx = num;
        }
        nextBtn.addEventListener('click', function (){
                moveSlide(currentIdx + 1);
            
        });

        prevBtn.addEventListener('click', function (){
            moveSlide(currentIdx - 1);
        
        });









}); //ready end