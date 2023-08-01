/*-----------------------------------------------------
  Product.js
  - Fetch a request to search using search.sku.liquid
  - Render response
-----------------------------------------------------*/

window.theme = window.theme || {}

theme.VariantHandle = (function() {
  var selectors = {
    container: '.product-swatches',
  }

  var cache = {}

  function cacheSelectors() {
    cache = {
      $container: $(selectors.container),
    }
  }

  function init() {
    cacheSelectors()
    fetchItemsByHandle(getProductHandle())
  }

  function fetchItemsByHandle(handle) {
    $.ajax({
      url: '/search?field=handle&q='+ handle +'*&view=swatches', 
      success: function(response) {
        response = filterResponse(response, handle);
        renderTemplate(response)
        addSelected()
      },
      error: function(error) {
        console.error(error)
      }
    })
  }
  
  function filterResponse(response, handle) {
    var el = $( '<div></div>' );
    el.html(response);
    var swatchList = $(".swatch-list", el)[0];
    var swatches = $(".swatch", swatchList);
    for (var i = 0; i < swatches.length; i++) {
      var swatch = swatches[i];
      var src = swatch.getAttribute("href");
      if (!src.includes('/' + handle))
      {
        swatchList.removeChild(swatch.parentNode);
      }
    }
    return swatchList;
  }

  function getProductHandle() {
    if( cache.$container.data('product-handle') != undefined) {
        return cache.$container.data('product-handle').split('-colour')[0]
      }
  }

  function renderTemplate(template) {
    cache.$container.html(template)
  }

  function addSelected() {
    var urlColor = cache.$container.data('product-handle').split('colour-')[1];
    var swatchEl = $('.swatch');
    swatchEl.each(function() {
      if($(this).next().html() == urlColor) {
        $(this).addClass("selected");
      }

    });

  }

  return {
    init: init
  }
})()