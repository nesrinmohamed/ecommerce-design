// $(document).ready(function(){
//     $('#menu i').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle')
//     })
//     $(window).on('scroll load' , function(){
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');
  
//         if($(window).scrollTop() > 68){
//             $('header .header-2').addClass('header-active')
//         }else{
//             $('header .header-2').removeClass('header-active')
            
//         }
//     })

//     //owlCarsoul
//     $(".home-slider").owlCarousel({
//         items:1,
//         nav:true,
//         dots:false,
//         loop:true,
//         autoplay:true,
//         autoplayTimeout:8000,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:false

//             },
//             600:{
//                 items:1,
//                 nav:false
//             },
//             1000:{
//                 items:1,
//                 nav:true,
//                 loop:true
//             }
//         }
//     })
//     });
function sumDigits(n) {
    if (typeof n !== 'string') {
        n = n.toString();
    }    
    if (n.length < 2) {
        return parseInt(n);
    }
​
    return sumDigits(
        n.split('')
         .reduce((acc, num) => acc += parseInt(num), 0)
    );
}
console.log(sumDigits(5))