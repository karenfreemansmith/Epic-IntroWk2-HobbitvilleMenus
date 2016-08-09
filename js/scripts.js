$("#sb").click(function() {
  $("body").removeClass();
  $("body").addClass("sb");
  $("li").removeClass();
  $("#sb").addClass("active");
});

$("#csb").click(function() {
  $("body").removeClass();
  $("body").addClass("csb");
  $("li").removeClass();
  $("#csb").addClass("active");
});

$("#tc").click(function() {
  $("body").removeClass();
  $("body").addClass("tc");
  $("li").removeClass();
  $("#tc").addClass("active");
});

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

$(".luncheon .clickable").click(function(event) {
  event.preventDefault();
  $(".luncheon .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".luncheon .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
});

$(".afternoon-tea .clickable").click(function(event) {
  event.preventDefault();
  $(".afternoon-tea .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".afternoon-tea .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
});

$(".dinner .clickable").click(function(event) {
  event.preventDefault();
  $(".dinner .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".dinner .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
});

$(".supper .clickable").click(function(event) {
  event.preventDefault();
  $(".supper .initially-showing").animate({
    opacity: "toggle",
    height: "toggle"
  });
  $(".supper .initially-hidden").animate({
    opacity: "toggle",
    height: "toggle"
  });
});
