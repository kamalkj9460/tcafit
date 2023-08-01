/*-----------------------------------------------------
  Meganav
  - requires jQuery or Zepto
-----------------------------------------------------*/
window.theme = window.theme || {};

theme.meganav = (function () {
  var cache = {};
  var isScrolled = false;

  function cacheSelectors() {
    cache = {
      $navDropdown: $('.meganav'),
      $menuItem: $('.site-nav li a'),
      $ajaxCart: $('.ajax-cart'),
      activeClass: 'meganav__show',
      $siteHeader: $('.site-header--wrapper'),
      timer: {},
    };
  };

  function setScrollEvents() {
    $(window).scroll(function(event){
      if ($(window).scrollTop() > 100) {
        cache.$siteHeader.addClass('site-header-active')
        isScrolled = true;
        return;
      }
      cache.$siteHeader.removeClass('site-header-active')
      isScrolled = false;
    });
  }

  function setMenuEvents() {
    cache.$menuItem.on('mouseover', function(e) {
      closeActiveMenus();
      var target = e.target.parentElement;
      var childNavItem = getChildNavId(getCurrentMenuId(target));
      $(this).addClass('is-active');
      closeAllMenus(this);
      setMenuActive(childNavItem, target);
      clearTimeout(cache.timer);
    });
    
    cache.$menuItem.on('mouseleave', function(e) {
      var target = e.target.parentElement;
      var childNavItem = getChildNavId(getCurrentMenuId(target));
      setMenuCloseDelay(childNavItem, e.target);
    })

    cache.$navDropdown.on('mouseleave', function(e) {
      $('.meganav_overlay').removeClass('meganav_overlay_active');
      cache.$siteHeader.removeClass('site-header-active')
    })
  };

  function getCurrentMenuId(el) {
    return $(el).data('meganav-parent');
  };

  function getChildNavId(id) {
    return $('[data-meganav-child="' + id +'"]');
  };

  function setMenuActive(el, target) {
    el.addClass(cache.activeClass);
    setDropdownEvents(el, target);
    $(".meganav_overlay").addClass('meganav_overlay_active');
    cache.$siteHeader.addClass('site-header-active');
  };

  function setMenuCloseDelay(el, target) {
    clearTimeout(cache.timer);
    cache.timer = setTimeout(function() {
      $(target).removeClass('is-active')
      $(".meganav_overlay").removeClass('meganav_overlay_active');
      closeMenu(el);
    }, 600);
  };

  function closeMenu(el) {
    el.removeClass(cache.activeClass);
  };

  function closeActiveMenus() {
    var activeMenus = getAllActiveMenus();
    
    _.map(activeMenus, function(item) {
      $(item).removeClass('is-active')
    })
  }

  function closeAllMenus(el) {
    for (var i = 0; i < cache.$menuItem.length; i++) {
      var item = cache.$menuItem[i].parentElement;
      var childNavItem = getChildNavId(getCurrentMenuId(item));
      closeMenu(childNavItem);
    }

    if (cache.$ajaxCart.hasClass('is-active')) {
      cache.$ajaxCart.hide();
    }
  };

  function getAllActiveMenus() {
    return _.filter(cache.$menuItem, function(item) {
      if ($(item).hasClass('is-active'))
        return item;
    });
  }

  function setDropdownEvents(el, target) {
    el.on('mouseenter', function(e) {
      clearTimeout(cache.timer);
    });

    el.on('mouseleave', function(e) {
      el.removeClass(cache.activeClass);
      $(target).find('.site-nav__link').removeClass('is-active')
    })
  };

  function init() {
    cacheSelectors();
    setMenuEvents();
    setScrollEvents();
  };

  return {
    init: init
  };
})();

$(document).ready(function () {
  theme.meganav.init();
});