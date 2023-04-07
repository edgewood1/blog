// State
var punchlineShown = false;
var menuOpen = false;
var control = {
  audio: false,
  color: "yellow"
};

// On mount
$(document).ready(function() {
//   readJokes();
  handleMenuClick();
});

// should menu show or hide? 

function handleMenuClick() {
    // get menu itself
    var menu = $(".menu");
    // if menu button is clicked, fire animate
    $(".menu__button").on("click", function() {
      animateMenuIcon();
      // if menu closed, then show it
      if (!menuOpen) menu.removeClass("hidden");
      // if menu is open, then hide it
      else menu.addClass("hidden");
      // if its open or closed, make it the opposite of what it was
      menuOpen = !menuOpen;
    });
  }

  // how to show ... 

  function animateMenuIcon() {
      // declare three lines
    var top = $("#menu__line--top");
    var mid = $("#menu__line--middle");
    var bottom = $("#menu__line--bottom");
    // if menuOpen, remove lines
    // where does x come from? already there? 
    if (menuOpen) {
      top.removeClass("line__top--open");
      mid.removeClass("line__middle--open");
      bottom.removeClass("line__bottom--open");
      // if its closed, add them
    } else {
      top.addClass("line__top--open");
      mid.addClass("line__middle--open");
      bottom.addClass("line__bottom--open");
    }
  }

  // how do we slide menu? 