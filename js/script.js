//menu sticky

$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 800){
    $(".main-menu").addClass("sticky")
  }else{
    $(".main-menu").removeClass("sticky")
  }

  if($scrollamout > 1500){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})






// counter-down start




// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// counter-down end


//testi-part slider start


$('#testi-part .row').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    
 
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 arrows: false,
                autoplay: true,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                autoplay:true,
                
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//testi-part slider end
