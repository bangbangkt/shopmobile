const menuOpen = document.querySelector(".menu__collapse");
const menuClose = document.querySelector(".menu__close");
const headerMenu = document.querySelector(".menu");

menuOpen.addEventListener("click", function() {
    headerMenu.classList.add("is-open");
    menuOpen.classList.add("unActive");
    menuClose.classList.add("active");
  });
   
  menuClose.addEventListener("click", function() {
    headerMenu.classList.remove("is-open");
    menuOpen.classList.remove("unActive");
    menuClose.classList.remove("active");
  });

  $(document).ready(function(){
    //banner carousel
    $("#banner .owl-carousel").owlCarousel({
      dots: true,
      items:1
    });

    // carousel top sale
    $(".topsale .owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      responsive:{
        330:{
          items:1
        },
        660:{
          items:3
        },
        1000:{
          items:5
        }
      }
      
    });


    // isotope filter
    var $grid = $(".grid").isotope({
      itemSelector : '.grid-item',
      layoutMode : 'fitRows'
  });

  // filter items on button click
  $(".button-group").on("click", "button", function(){
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue});
  });


   // carousel top sale
   $("#newPhone .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      330:{
        items:1
      },
      660:{
        items:3
      },
      1000:{
        items:5
      }
    }
    
  });

  // carousel top sale
  $("#blogs .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      330:{
        items:1
      },
      660:{
        items:2
      },
      1000:{
        items:3
      }
    }
    
  });
  });
  