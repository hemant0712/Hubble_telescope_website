// ====================================== GSAP code here ===========================================

var tl = gsap.timeline();

function time(){
    var a = 0;
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a < 100){
            document.querySelector(".preloader h1").innerHTML = a + "%";
        }
        else{
            a = 100;
            document.querySelector(".preloader h1").innerHTML = a + "%";
        }
    },100)
} 

tl.to(".preloader",{
    onStart: time()
});

tl.to(".preloader",{
    top: "-100vh",
    duration: 1.5,
    delay: 1
})


var nav = document.querySelector(".header");

        window.addEventListener("scroll", function(){

            if(window.pageYOffset > 150){
                nav.classList.add("scrolled");
            }
            else{
                nav.classList.remove("scrolled");
            }

        })


    // --------------------- AOS initialization ------------------- 

        AOS.init({
                mirror: false,
                duration: 1200,
            });



// ================================== jQuery starts here ===========================================

        $(function(){

            // magnific popup gallery ---------------------------------------------

            $('.gallerys').magnificPopup({
                                    type: 'image',
                                    delegate: 'a',
                                    gallery: {
                                        enabled: true
                                    } 
                                });

                                $('.gallerys1').magnificPopup({
                                    type: 'image',
                                    delegate: 'a',
                                    gallery: {
                                        enabled: true
                                    } 
                                });
                                $('.gallerys2').magnificPopup({
                                    type: 'image',
                                    delegate: 'a',
                                    gallery: {
                                        enabled: true
                                    } 
                                });
                                $('.gallerys3').magnificPopup({
                                    type: 'image',
                                    delegate: 'a',
                                    gallery: {
                                        enabled: true
                                    } 
                                });


            // go to top button -----------------------------------

            var hh = 150;
            $(document).scroll(function () {

                var st = $(document).scrollTop();

                if (st > hh) {
                    $(".topbtn").fadeIn();

                } else {
                    $(".topbtn").fadeOut();
                }

            });

            $(".topbtn").click(function () {
                $("html,body").animate({
                    scrollTop: 0,
                }, slow)
            });


            // Bootstrap tooltip here -------------------------

            $('[data-toggle="tooltip"]').tooltip();



            
        })