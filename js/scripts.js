$(".breakfast .clickable").click(function(event) {
  event.preventDefault();
  $(".breakfast .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".breakfast .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
});

$(".second-breakfast .clickable").click(function(event) {
  event.preventDefault();
  $(".second-breakfast .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".second-breakfast .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
});

$(".elevenses .clickable").click(function(event) {
  event.preventDefault();
  $(".elevenses .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".elevenses .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
});
