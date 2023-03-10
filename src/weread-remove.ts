import $ from "jquery";

if (location.pathname.includes("shelf")) {
  $(
    ".shelf_header, .navBar_link_ink, .navBar_link_Phone"
  ).remove();
  // 书架页面上多余的separator
  $(".navBar_separator").slice(1, 4).remove();
}
