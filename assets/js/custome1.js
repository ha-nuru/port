//index7
$(document).ready(function () {
  /*section7 컨텍트 ha-neul 이모지*/
  $(".haneul_imogi").mouseover(function () {
    $(this).parent().siblings(".imogi_over").css("display", "block");
  });
  $(".haneul_imogi").mouseleave(function () {
    $(this).parent().siblings(".imogi_over").css("display", "none");
  });
  //사이트 인덱스 이미지
  $(document).mousemove(function (e) {
    $(".nav_site_index .pattern").offset({
      left: e.pageX + 70,
      top: e.pageY + 70,
    });
  });
  /*스크립트, 컨택트 nav*/
  var startchange = $(".sec6_main").offset().top;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 200;
    if (scroll >= startchange) {
      $(".sec6_main .nav_scroll").addClass("scroll_on");
      $(".sec6_main .nav_scroll").addClass("sec6_nav_bg");
      $(".sec6_main .nav_W").show();
      $(".sec6_main .nav_W a").show();
    } else {
      $(".sec6_main .nav_scroll").removeClass("sec6_nav_bg");
      $(".sec6_main .nav_scroll").removeClass("scroll_on");
      $(".sec6_main .nav_W").hide();
    }
  });
  var startchange2 = $("#section7").offset().top;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 200;
    if (scroll >= startchange2) {
      $(".sec6_main .nav_scroll").removeClass("scroll_on");
      $(".nav_contact").addClass("navCont_scroll");
      $(".nav_contact").show();
      $(".contactN").show();
    }else if(startchange <= startchange2){
      $(".nav_contact").removeClass("navCont_scroll");
      $(".nav_contact").hide();
      $(".contactN").hide();
    }else {
      $(".sec6_main .nav_scroll").removeClass("scroll_on");
    }
  });
  /*사이트 인덱스 x 버튼*/
  // $(window).scroll(function () {
  //   var startchange5 = $("#site").offset();
  //   if ($(document).scrollTop() + 100 > startchange5.top) {
  //     $(".X_click").css("display", "none");
  //   } else {
  //     $(".X_click").css("display", "block");
  //   }
  // });
  $(window).scroll(function () {
    var scr_w = $(window).width();
    if(scr_w >= 860) {
      var startchange5 = $("#site").offset();
      if ($(document).scrollTop() + 100 > startchange5.top) {
          $(".X_click").css("display", "none");
        } else {
          $(".X_click").css("display", "block");
        }
      }else{
        var startchange6 = $("#section6").offset();
        if ($(document).scrollTop() + 100 > startchange6.top) {
          $(".X_click").css("display", "none");
        } else {
          $(".X_click").css("display", "block");
        }
      }
  });

    
  /*탭메뉴*/
  $(".site_wrap").each(function (index) {
    $(this).find(".tab_wrap").attr("data-num", index);
    $(this)
      .find(".tab_wrap")
      .addClass("num" + index);
    $(".tab_btn > ul > li").click(function (e) {
      e.preventDefault();
      let target = $(this);
      let num = target.parents('.tab_wrap').attr("data-num");
      let index = target.index();

      $(".tab_wrap.num" + num + " .tab_btn > ul > li").removeClass("active");
      target.addClass("active");

      $(".tab_wrap.num" + num + " .tab_cont > div").css("display", "none");
      $(".tab_wrap.num" + num + " .tab_cont > div")
        .eq(index)
        .css("display", "block");
    });
  });
  /*탭메뉴 화이트모드*/
  $(".toggle_item").click(function (e) {
    e.preventDefault("a");
    let target = $(this);
    let num = target.parents('.tab_wrap').attr("data-num");

    $(".tab_wrap.num" + num + " .tab_cont > div .language-js").toggleClass(
      "on"
    );
    $(".tab_wrap.num" + num + " .tab_mode").toggleClass("on");
  });
  /*사이트 모달*/
    $(".site_tri").on("click", function () {
      $(".site_modal_wrap").toggleClass("open");
      return false;
    });
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
});
