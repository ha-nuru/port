//index7
$(function () {
  /*nav - mouseover imogi*/
  $(".haneul_imogi").mouseover(function () {
    $(this).parent().siblings(".imogi_over").css("display", "block");
  });
  $(".haneul_imogi").mouseleave(function () {
    $(this).parent().siblings(".imogi_over").css("display", "none");
  });
  //site_index mousemove img
  $(document).mousemove(function (e) {
    $(".nav_site_index .pattern").offset({
      left: e.pageX + 70,
      top: e.pageY + 70,
    });
  });
  /*script contact sec nav*/
  var startchange = $(".post_s").offset().top;
  var scroll_do = $(".post_s .nav_scroll");
  var scroll_contact = $(".nav_contact");
  var scroll_do_in = $(".post_s .nav_W");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 200;
    if (scroll >= startchange) {
      scroll_do.addClass("scroll_on");
      scroll_do.addClass("sec6_nav_bg");
      scroll_do_in.show();
      $(".post_s .nav_W a").show();
    } else {
      scroll_do.removeClass("sec6_nav_bg");
      scroll_do.removeClass("scroll_on");
      scroll_do_in.hide();
    }
  });
  var startchange2 = $("#contact_p").offset().top;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 200;
    if (scroll >= startchange2) {
      scroll_do.removeClass("scroll_on");
      scroll_contact.addClass("navCont_scroll");
      scroll_contact.show();
      $(".contactN").show();
    } else if (startchange <= startchange2) {
      scroll_contact.removeClass("navCont_scroll");
      scroll_contact.hide();
      $(".contactN").hide();
    } else {
      scroll_do.removeClass("scroll_on");
    }
  });
  // highttop show
  var hight_s = $("#post_scrap").offset().top;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 600;
    if (scroll >= hight_s) {
      $(".heighttop").addClass("up");
    } else {
      $(".heighttop").removeClass("up");
    }
  });
  /*site index x_button */
  $(window).scroll(function () {
    var scr_w = $(window).width();
    if (scr_w >= 860) {
      var startchange5 = $("#post_scrap").offset();
      if ($(document).scrollTop() + 100 > startchange5.top) {
        $(".X_click").css("display", "none");
      } else {
        $(".X_click").css("display", "block");
      }
    } else {
      var startchange6 = $("#post_scrap").offset();
      if ($(document).scrollTop() + 100 > startchange6.top) {
        $(".X_click").css("display", "none");
      } else {
        $(".X_click").css("display", "block");
      }
    }
  });
  /*portfolio site modal*/
  $(".site_tri1").on("click", function () {
    $(".site_modal_wrap1").toggleClass("open");
    return false;
  });
  $(".site_tri2").on("click", function () {
    $(".site_modal_wrap2").toggleClass("open");
    return false;
  });
  $(".site_tri3").on("click", function () {
    $(".site_modal_wrap3").toggleClass("open");
    return false;
  });
  $(".site_tri4").on("click", function () {
    $(".site_modal_wrap4").toggleClass("open");
    return false;
  });
  $(".site_tri5").on("click", function () {
    $(".site_modal_wrap5").toggleClass("open");
    return false;
  });
  $(".site_tri6").on("click", function () {
    $(".site_modal_wrap6").toggleClass("open");
    return false;
  });
});
