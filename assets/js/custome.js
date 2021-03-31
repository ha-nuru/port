//index 6
/*sub_bott imogi font ani*/
$(function () {
  let current_class_index = 0;
  const classes = ["boo", "hey", "dude", "classes", "and", "junk"];
  let current_class = "";
  const target_element = $(".yo");
  $(".marquee").marqueeify({
    speed: 350,
    bumpEdge: function () {
      const new_class = classes[current_class_index++];
      if (current_class_index > classes.length - 1) {
        current_class_index = 0;
      }
      if (target_element.hasClass(current_class)) {
        target_element.removeClass(current_class);
      }
      target_element.addClass(new_class);
      current_class = new_class;
    },
  });

  /*sub_bott banner ani*/
  $(".about-marquee").marquee({
    duration: 21000,
    gap: 0,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    startVisible: true,
    pauseOnHover: true,
  });

  /*scroll magic*/
  var scr_w = $(window).width();
  if (scr_w >= 860) {
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".img_cont_box",
      triggerHook: 0.9,
      offset: 300,
    })
      .setClassToggle(".img_cont_txt span", "visible")
      .addTo(controller);
  } else {
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#sub_cent",
      triggerHook: 0.9,
      offset: 300,
    })
      .setClassToggle(".img_cont_txt span", "visible")
      .addTo(controller);
  }

  /*mouse move img */
  $(document).mousemove(function (e) {
    $(".see_ani").offset({
      left: e.pageX + 20,
      top: e.pageY + -300,
    });
  });
  $(".skillM_t a").mouseover(function () {
    $(this).siblings().css("display", "block");
  });
  $(".skillM_t a").mouseleave(function () {
    $(this).siblings().css("display", "none");
  });

  /*About_gh - nav*/
  $(window).scroll(function () {
    var nav_about = $("#About_gh").offset().top;
    var wHeight = $(window).height() / 8;
    var scrolls = $(window).scrollTop() + wHeight;
    if (scrolls >= nav_about) {
      $("#sub_bott .nav_scroll").addClass("about_nav_bg");
      $("#sub_bott .nav_W").show();
      $("#sub_bott .nav_W a").show();
    } else {
      $("#sub_bott .nav_scroll").removeClass("about_nav_bg");
      $("#sub_bott .nav_W").hide();
      $("#sub_bott .nav_W a").hide();
    }
    console.log(wHeight);
    console.log(nav_about);
    /*skill percent ani */
    var wHeight = $(window).height();
    var scrolls = $(window).scrollTop() + wHeight;
    if (scrolls >= $(".logo_w").offset().top) {
      gsap.to(
        ".logo_w >div:nth-of-type(1) .graph span, .logo_w >div:nth-of-type(2) .graph span",
        {
          duration: 1,
          width: 90 + "%",
          ease: Bounce.easeOut,
          stagger: 0.1,
          opacity: 1,
        }
      );
      gsap.to(".logo_w >div:nth-of-type(3) .graph span", {
        duration: 1,
        width: 60 + "%",
        ease: Bounce.easeOut,
        stagger: 0.1,
        opacity: 1,
      });
      gsap.to(
        ".logo_w>div:nth-of-type(4) .graph span, .logo_w>div:nth-of-type(5) .graph span",
        {
          duration: 1,
          width: 75 + "%",
          ease: Bounce.easeOut,
          stagger: 0.1,
          opacity: 1,
        }
      );
      gsap.to(".logo_w >div:nth-of-type(6) .graph span", {
        duration: 1,
        width: 85 + "%",
        ease: Bounce.easeOut,
        stagger: 0.1,
        opacity: 1,
      });
      gsap.to(
        ".logo_w >div:nth-of-type(7) .graph span, .logo_w >div:nth-of-type(8) .graph span",
        {
          duration: 1,
          width: 50 + "%",
          ease: Bounce.easeOut,
          stagger: 0.1,
          opacity: 1,
        }
      );
    }
    console.log(wHeight);
  });
});

/*sub_bott imogi ani*/
(function ($, window, undefined) {
  $.fn.marqueeify = function (options) {
    var settings = $.extend(
      {
        horizontal: true,
        vertical: true,
        speed: 60,
        container: $(this).parent(),
        bumpEdge: function () {},
      },
      options
    );
    return this.each(function () {
      var containerWidth,
        containerHeight,
        elWidth,
        elHeight,
        move,
        getSizes,
        $el = $(this);

      getSizes = function () {
        containerWidth = settings.container.outerWidth();
        containerHeight = settings.container.outerHeight();
        elWidth = $el.outerWidth();
        elHeight = $el.outerHeight();
      };
      move = {
        right: function () {
          $el.animate(
            {
              left: containerWidth - elWidth,
            },
            {
              duration: (containerWidth / settings.speed) * 1000,
              queue: false,
              easing: "linear",
              complete: function () {
                settings.bumpEdge();
                move.left();
              },
            }
          );
        },
        left: function () {
          $el.animate(
            {
              left: 0,
            },
            {
              duration: (containerWidth / settings.speed) * 1000,
              queue: false,
              easing: "linear",
              complete: function () {
                settings.bumpEdge();
                move.right();
              },
            }
          );
        },
        down: function () {
          $el.animate(
            {
              top: containerHeight - elHeight,
            },
            {
              duration: (containerHeight / settings.speed) * 1000,
              queue: false,
              easing: "linear",
              complete: function () {
                settings.bumpEdge();
                move.up();
              },
            }
          );
        },
        up: function () {
          $el.animate(
            {
              top: 0,
            },
            {
              duration: (containerHeight / settings.speed) * 1000,
              queue: false,
              easing: "linear",
              complete: function () {
                settings.bumpEdge();
                move.down();
              },
            }
          );
        },
      };
      getSizes();
      if (settings.horizontal) {
        move.right();
      }
      if (settings.vertical) {
        move.down();
      }
      $(window).resize(function () {
        getSizes();
      });
    });
  };
})(jQuery, window);
