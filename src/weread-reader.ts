import $ from "jquery";

// 宽屏
$(".app_content").css({
  "maxWidth": "1000px",
});
$(".readerTopBar").css({
  "maxWidth": "1000px",
  "transition": "max-width 0.06s ease-in-out"
});

// 半透明顶栏和侧边栏
$(".readerTopBar").stop().css("opacity", "0.6");
$(".readerControls").stop().css("opacity", "0.8");

// 顶栏和侧边栏，上划显示，下滑隐藏
let windowTop = 0;
window.addEventListener("scroll", () => {
  const scrollS = window.scrollY;
  if (scrollS >= windowTop + 100) {
    $(".readerTopBar, .readerControls").fadeOut();
    windowTop = scrollS;
  } else if (scrollS < windowTop) {
    $(".readerTopBar, .readerControls").fadeIn();
    windowTop = scrollS;
  }
});
