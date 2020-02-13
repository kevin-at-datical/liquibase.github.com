/**
 * Sticky header
 */

jQuery(document).on("scroll", function() {
  if (jQuery(document).scrollTop() > 0) {
    jQuery("header, body").addClass("shrink");
  } else {
    jQuery("header, body").removeClass("shrink");
  }
});

jQuery(document).ready(function(jQuery) {
  /**
   * Toggle menu for mobile
   */
  jQuery(".menu-btn").click(function() {
    jQuery(this).toggleClass("active");
    jQuery(".menu-overlay").toggleClass("open");
    jQuery("html, body").toggleClass("no-overflow");
    jQuery(".main-menu ul li.active").removeClass("active");
    jQuery(".main-menu ul.sub-menu").slideUp();
  });
  /**
   * Multilevel accordion menu for mobile Start
   */
  jQuery("li").each(function() {
    if (jQuery(this).hasClass("menu-item-has-children")) {
      jQuery(this)
        .find("a:first")
        .after('<span class="submenu-icon"></span>');
    }
  });

  /**
   * Sub menu icon and active state
   */
  jQuery(".main-menu .submenu-icon").click(function() {
    const link = jQuery(this);
    const closestUl = link.closest("ul");
    const parallelActiveLinks = closestUl.find(".active");
    const closestLi = link.closest("li");
    const linkStatus = closestLi.hasClass("active");
    let count = 0;
    closestUl.find("ul").slideUp(function() {
      if (++count === closestUl.find("ul").length) {
        parallelActiveLinks.removeClass("active");
      }
    });
    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });

  if (jQuery(window).width() <= 992) {
    $(".slider-area").owlCarousel({
      loop: true,
      margin: 20,
      autoHeight: false,
      autoplay: true,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 20
        },
        600: {
          items: 2
        },
        992: {
          items: 2
        }
      }
    });
  }
});
