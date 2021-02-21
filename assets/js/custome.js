//index 6
/*section2 이모지 폰트 움직이기*/
$(document).ready(function () {
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
});

/*section2 이모지 움직이기*/
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

$(document).ready(function () {
  /*section2 배너 움직이기*/
  $(".about-marquee").marquee({
    duration: 21000,
    gap: 0,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    startVisible: true,
    pauseOnHover: true,
  });
  /*스크롤 매직*/
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".sec2_boxR",
    triggerHook: 0.9,
    offset: 300,
  })
    .setClassToggle(".mov_txt1", "visible")
    .addTo(controller);

  var controller = new ScrollMagic.Controller();
  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".sec2_boxR",
    triggerHook: 0.9,
    offset: 300,
  })
    .setClassToggle(".mov_txt2", "visible")
    .addTo(controller);

  var controller = new ScrollMagic.Controller();
  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".sec2_boxR",
    triggerHook: 0.9,
    offset: 300,
  })
    .setClassToggle(".mov_txt3", "visible")
    .addTo(controller);

  /*마우스 오버 이미지*/
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

  /*section2 - nav*/
  var nav_ind6 = $("#About_gh").offset().top;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= nav_ind6) {
      $("#section2 .nav_scroll").addClass("sec2_nav_bg");
      $(".nav_W").show();
      $(".nav_W a").show();
    } else {
      $("#section2 .nav_scroll").removeClass("sec2_nav_bg");
      $(".nav_W").hide();
      $(".nav_W a").hide();
    }
		console.log(scroll);
		console.log(nav_ind6);
  });
  /*스킬 퍼센트 애니메이션*/
  $(window).scroll(function () {
    let scroll = $(window).scrollTop() + 400;
    if (scroll >= $("#section3").offset().top) {
      gsap.to(
        ".logo_w >div:nth-of-type(1) .graph span,.logo_w >div:nth-of-type(2) .graph span,.logo_w >div:nth-of-type(6) .graph span",
        {
          duration: 1,
          width: 95 + "%",
          ease: Bounce.easeOut,
          stagger: 0.1,
          opacity: 1,
        }
      );
      gsap.to(".logo_w >div:nth-of-type(3) .graph span", {
        duration: 1,
        width: 80 + "%",
        ease: Bounce.easeOut,
        stagger: 0.5,
        opacity: 1,
      });
      gsap.to(".logo_w >div:nth-of-type(4) .graph span", {
        duration: 1,
        width: 85 + "%",
        ease: Bounce.easeOut,
        stagger: 0.8,
        opacity: 1,
      });
      gsap.to(".logo_w>div:nth-of-type(5) .graph span", {
        duration: 1,
        width: 90 + "%",
        ease: Bounce.easeOut,
        stagger: 0.9,
        opacity: 1,
      });
      gsap.to(".logo_w >div:nth-of-type(7) .graph span", {
        duration: 1,
        width: 80 + "%",
        ease: Bounce.easeOut,
        stagger: 1,
        opacity: 1,
      });
      gsap.to(".logo_w >div:nth-of-type(8) .graph span", {
        duration: 1,
        width: 70 + "%",
        ease: Bounce.easeOut,
        stagger: 1,
        opacity: 1,
      });
    }
  });
});

