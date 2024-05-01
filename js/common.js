$(document).ready(function() { //start

  $(window).resize(function(){

    if($(window).width() < 700) {
      $(".eng").hide();
      $(".q-menu .lang").mouseenter(function(){
        $(".q-menu .lang .eng").stop().slideDown();
      });
      $(".q-menu .lang").mouseleave(function(){
        $(".q-menu .lang .eng").slideUp();
      });//한글 영어 선택

      }else{
        $(".eng").show();
        $(".q-menu .lang").off();

      }
  });


  $(".depth2").hide();

  $(".menu-close").hide();
  $(".gnb").hide();
  $(".dim").hide();

  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".gnb").show();
    $(this).hide();
    $(".menu-close").show();
  });//메뉴열기

  $(".depth1").click(function(){
    $(".depth2").stop().slideUp();
    $(this).children(".depth2").slideDown();
  });//리스트클릭

  $(".menu-close").click(function(){
    $(".dim").fadeOut();
    $(".gnb").hide();
    $(this).hide();
    $(".ham").show();
  });//메뉴닫기


  $(".search-open").hide();

  $(".search").click(function(){
    $(".search-open").show();
    $(this).hide();
    $(".search-close").show();
  });

  $(".search-close").click(function(){
    $(".search-open").hide();
    $(this).hide();
    $(".search").show();
  });

  $(window).resize(function(){
    if($(window).width() > 700) {
      $(".eng").show();
      
    
      } else {
       
      }
  });

  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed : 1000,
    loop : true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints : {
      700 : {
        slidesPerView: 1.5,
        spaceBetween : 40,
      },
      1200 : {
        slidesPerView : 3,
        spaceBetween : 40,  
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  
  var swiper = new Swiper(".gift-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed : 1000,
    loop : true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
});//end