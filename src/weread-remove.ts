import $ from "jquery";

if (location.pathname.includes("shelf")) {
  $(
    ".shelf_header, .navBar_link_ink, .navBar_link_Phone"
  ).remove();
  $(".navBar_separator").slice(1, 4).remove();
} else if (location.pathname.includes("reader")) {
  $(".readerTopBar_right, .readerTopBar_actions, .lecture, .download").hide();
} else if (location.pathname === "/") {
  $(".navBar_link_ink, .navBar_link_Phone").remove();
  $(".navBar_separator").slice(1, 4).remove();
  $(
    ".ranking_topCategory_container, .recommend_preview_container, .app_footer_copyright"
  ).remove();
  // 解决有时用户头像无法正常工作的问题
  setTimeout(() => $(".wr_avatar_img").attr("src")?.includes("wx.qlogo.cn") || location.reload(), 2500);
} else {
  console.log(location.pathname);
}
