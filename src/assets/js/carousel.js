$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-main-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:true
        },

        576:{
            items:2,
            margin:0,
            nav:true
        },

        767:{
            items:4,
            margin:0,
            nav:true
        }
    }
})

$('.owl-men-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:true
        },

        576:{
            items:2,
            margin:0,
            nav:true
        },
    }
})

$('.owl-women-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:true
        },

        576:{
            items:2,
            margin:0,
            nav:true
        },
    }
})

function selectGender(gender) {
    var maleButton = document.getElementById("maleButton");
    var femaleButton = document.getElementById("femaleButton");
  
    if (gender === "male") {
      maleButton.style.backgroundColor = "#f00";   // Set red background for male button
      maleButton.style.color = "#fff";
      femaleButton.style.backgroundColor = "lightgrey"; // Reset background for female button
      femaleButton.style.color="black";
    } 
    else if (gender === "female") {
      maleButton.style.backgroundColor = "#ccc";   // Reset background for male button
      maleButton.style.color="black";
      femaleButton.style.backgroundColor = "#f00"; // Set red background for female button
      femaleButton.style.color = "#fff";
    }
  }
  