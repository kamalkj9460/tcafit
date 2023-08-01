(function($){
  /* ====================== FRAME ===================== */
  var editorActive = false;

  /* ==================  EDITOR LOADER ================ */
  var frame = {
    sectionOpen: {
      newsletter : function() {newsletterPopup() },
      exitintent : function() { }
    },

    sectionClose: {
    },

    blockOpen: {
      meganav: function(editing, param) {meganav(editing, param)  }
    },

    blockClose: {
      meganav: function(editing, param) {meganav(editing, param)  }
    }
  }

  /* =================== EDITOR INIT =================== */
  /* DO SOMETHING WHEN SECTIONS IS ACTIVE */
  $(document).on('shopify:section:load', function(){
    editorActive = true;
  });

  /* SECTION OPENED: CHECK THE OPEN LIST AND DO SOMETHING */
  $(document).on('shopify:section:select', function(evt){
    editorActive = true;

    var sectionName = evt.detail.sectionId;
    if( frame.sectionOpen[sectionName] ){
      frame.sectionOpen[sectionName]();
    }
  });

  /* SECTION CLOSED: CHECK THE OPEN LIST AND DO SOMETHING */
  $(document).on('shopify:section:deselect', function(evt){
    editorActive = true;

    var sectionName = evt.detail.sectionId;
    if( frame.sectionClose[sectionName] ){
      frame.sectionClose[sectionName]();
    }    
  });

  /* BLOCK OPENED: CHECK THE OPEN LIST AND DO SOMETHING */
  $(document).on('shopify:block:select', function(evt){
    editorActive = true;

    var sectionName = evt.detail.sectionId,
            blockEl = $(evt.target);

    if( frame.blockOpen[sectionName] ){
      frame.blockOpen[sectionName](blockEl, 'editing');
    }
  });

  /* BLOCK CLOSED: CHECK THE CLOSED LIST AND DO SOMETHING */
  $(document).on('shopify:block:deselect', function(evt){
    editorActive = true;

    var sectionName = evt.detail.sectionId,
            blockEl = $(evt.target);

    if( frame.blockClose[sectionName] ){
      frame.blockClose[sectionName](blockEl, 'close');
    }
  });

  /* ================== FRONTEND LOADER ================ */
  function themeInit() {
    // CORE MODULE INIT'S
    swatches();

    // CUSTOM MODULE INIT'S
    newsletterPopup();
    stickyHeader();
    ajaxCart();
  };

  themeInit();

  /* ================= AJAX NEWSLETTER ================= */
  function newsletterPopup() {
    if( Cookies.get('newsletter') == undefined || editorActive==true ){
      Cookies.set('newsletter', true, { expires: 1, path: '/' });
      
      $(document).trigger({
        type: 'openModal',
        id: '#newsletter'
      });
    }

    $('#mc-embedded-subscribe').on('submit', function(e){
      e.preventDefault();

      $.ajax({
        type        : $(this).attr('method'),
        url         : $(this).attr('action'),
        data        : $(this).serialize(),
        cache       : false,
        dataType    : 'json',
        contentType : "application/json; charset=utf-8",
        error       : function(err) { console.log("Could not connect to the registration server. Please try again later, or contact hello@wemakewebsites.com"); },
        success     : function(data) {
          if (data.result != "success") {
            $('.newsletter__response').append('<span class="error">Sorry, this email is either incorrect or already exists on our system</span>');
          } else {
            setTimeout(function(){ Cookies.set('newsletter', true, { expires: 365, path: '/' })}, 150);
            //HC- Change the success message on newsletter-15 Aug'18
            setTimeout(function(){ $('.newsletter__response').html('<h4>Thank You</h4><p>New success message</p>')}, 250 );
          }
        }
      });
    }); 

    $('#mc-embedded-subscribe2').on('submit', function(e){
      e.preventDefault();

      $.ajax({
        type        : $(this).attr('method'),
        url         : $(this).attr('action'),
        data        : $(this).serialize(),
        cache       : false,
        dataType    : 'json',
        contentType : "application/json; charset=utf-8",
        error       : function(err) { console.log("Could not connect to the registration server. Please try again later, or contact hello@wemakewebsites.com"); },
        success     : function(data) {
          if (data.result != "success") {
            $('.newsletter__response').append('<span class="error">Sorry, this email is either incorrect or already exists on our system</span>');
          } else {
            setTimeout(function(){ Cookies.set('newsletter', true, { expires: 365, path: '/' })}, 150);
            setTimeout(function(){ $('.newsletter__response').html('<h4>Thank You</h4><p>An email has been sent to you to confirm your registration.</p>')}, 250 );
          }
        }
      });
    }); 
  };


  /* ================= STICKY HEADER ================= */
function stickyHeader() {
  $(window).on('scroll', function(){
  var scrollTop = $(window).scrollTop(),
  $header   = $('.site-header--wrapper');

    
    });
    };

  /* ================= AJAX CART ================= */
  function ajaxCart(){
    var storeCurrency = Cookies.get('currency'),
                $form = $('.product-form'),
       $cartToggleBtn = $('.site-header__cart'),
           $cartCount = $('[js-ajax-cart="cart-counter"]'),
       $cartSubmitBtn = $('.product-form__cart-submit span'),
            $cartBody = $('.cart-ajax'),
            $cartList = $('.cart-ajax__list')
             $cartRow = $('cart-ajax__row'),
          $cartRemove = $('.cart-ajax__remove'),
        $cartQuantity = '.cart-ajax__quantity-ico',
      $cartTotalPrice = $('.cart-ajax--total-price'),
           cartOpened = false,
          cartNoItems = $cartCount.attr('data-count');

    function cartBuild() {
      $.getJSON( "/cart.js", function( data ) {
        items = data.items,
        cart  = [];

        $.each(items, function(i, item){
          prodInfo = {
            image         : item.image,
            price         : item.price,
            title         : item.product_title,
            variant_title : item.variant_title,
            quantity      : item.quantity
          }
          cart.push(prodInfo);
        });

        $cartList.html('');

        for (var i = 0; i < cart.length; i++) {
          var cartVariantTitle = cart[i].variant_title != null ? cart[i].variant_title : '' ;

          console.log(cartVariantTitle);

          var cartImage = '<div class="cart-ajax__image"><img src='+cart[i].image+' /></div>',
              cartTitle = '<div class="cart-ajax__product-info"><h4>'+cart[i].title+'</h4> <p>'+cartVariantTitle+'</p>',
              cartPrice = '<span class=money>'+moneyFormatter.format(theme.storeCurrency, (cart[i].price/100))+'</span>',
           cartQuantity = '<div class="cart-ajax__quantity"><span class="cart-ajax__quantity-ico cart-ajax__quantity-ico--minus">-</span><input type="text" value="'+cart[i].quantity+'"><span class="cart-ajax__quantity-ico cart-ajax__quantity-ico--plus">+</span></div>'
             cartRemove = '<a href=# class=cart-ajax__remove><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" stroke="#111" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M1.125 1.125l8.839 8.839M9.875 1.125l-8.75 8.75"/></g></svg></a>'
               cartData = '<div class="cart-ajax__row" data-line='+(i+1)+'><div class="cart-ajax__data">'+cartImage+cartTitle+cartQuantity+cartPrice+cartRemove+'</div></div></div';

          $cartList.append(cartData);
        }

        $cartTotalPrice.html('<span class=money>'+moneyFormatter.format(theme.storeCurrency, (data.total_price/100))+'</span>');

        cartOpened = true;
      });
    };

    function cartOpen() {
      cartNoItems = $cartCount.attr('data-count');
      $('.cart-ajax-underlay').remove()

      if( cartOpened != true ){ cartBuild(); }
      if ( cartNoItems > 0 ) {
        $cartBody.addClass('cart-ajax--show');
        setTimeout(function(){ 
          $cartBody.addClass('cart-ajax--fadeIn');
        }, 250);

        $('body').append('<div class="cart-ajax-underlay"></div>');

      } else {

        $cartBody.removeClass('cart-ajax--fadeIn cart-ajax--show');
        cartOpened = false;
      }

    };

    function cartRender() {

      $.getJSON( "/cart.js", function( data ) {
        console.log($cartCount)
        var cartTotal = data.item_count;
        $cartCount.find('span').html(cartTotal);
        $cartCount.attr('data-count',cartTotal);
        cartTotal > 0 ? $cartCount.addClass('site-header__cart-count--show') : $cartCount.removeClass('site-header__cart-count--show');
        cartOpen();
      });
    };

    function cartQuantity(el, lineQuantity) {
      var $lineRow = el.parents('.cart-ajax__row'),
            lineNo = $lineRow.data('line');

      $.ajax({
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + lineQuantity + '&line=' + lineNo,
        dataType: 'json',
        success: function(){
          if ( lineQuantity == 0 ) { $lineRow.addClass('cart-ajax__row--deleted')}
          setTimeout(function(){
            if ( lineQuantity == 0 ) { $lineRow.remove(); }
            cartOpened = false;
            cartRender();
          }, 250);
        }
      });
    };

    
      $cartToggleBtn.on('click', function(e){
        e.preventDefault();
        cartRender();
      });

      $form.on('submit', function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: '/cart/add.js',
          data: $('form[action="/cart/add"]').serialize(),
          dataType: 'json',
          success: function(responce){
            cartOpened = false;
            $form.addClass('product-form--submitted');
            $cartSubmitBtn.html("Added to Cart");
            cartRender();
            setTimeout(function(){
              $cartSubmitBtn.html("Add to cart");
              $form.removeClass('product-form--submitted');
            }, 500);
          }
        });
      });

      $(document).on('mouseup', '.cart-ajax__remove', function(e){
        e.preventDefault();
        cartQuantity($(this), 0);
      });

      $(document).on('mouseup', $cartQuantity, function(e){
        e.preventDefault();
        var $input       = $(this).parent().find('input'),
            inputVal     = parseInt($input.val()),
            sendQuantity = 0;

        if( $(this).hasClass('cart-ajax__quantity-ico--plus') ){
          $input.val(inputVal+1);
          sendQuantity = inputVal+1;
        } else {
          if(inputVal-1 != 0){
            $input.val(inputVal-1);
            sendQuantity = inputVal-1;
          }
        }
        cartQuantity($(this), sendQuantity);
      });

      $(document).on('mouseup', function(e){
        if (!$cartBody.is(e.target) && $cartBody.has(e.target).length === 0){ 
          // Fade appended underlay underlay underlay
          $('.cart-ajax-underlay').fadeOut('fast', function() {
            $('.cart-ajax-underlay').remove()
          })
          $cartBody.removeClass('cart-ajax--show')
        }

      });
    
  };
  

  
  /* ================= MEGA NAV ================= */
  function meganav(editing, param){
    var $siteNavList = $('.site-nav li'),
       $siteDropdown = $('.meganav');

    /* SHOW IF EDITING */
    if(editing){
      if( param == 'editing'){
        editing.addClass('meganav__show');
      } else {
        editing.removeClass('meganav__show');
      }
    }

    $siteNavList.on('mouseenter', function(evt) {
      var $parentId     = $(this).data('meganav-parent'),
          $dropdownList = $('.meganav');
      
      $dropdownList.removeClass('meganav__show');

      $dropdownList.each(function(){
        var $childId = $(this).data('meganav-child');
        if( $parentId == $childId ){
          $(this).addClass('meganav__show');
        }
      });

    });

    $siteDropdown.on('mouseleave mousedown', function(e) {
      // Right Click Patch
      if( e.type != 'mousedown' && e.originalEvent.buttons != 2 ){
        $(this).removeClass('meganav__show');
      }
    });
  }
  /* ================= SWATCHES ================= */
  function swatches(){
    $(document).ready(function(){
      $('.swatch').on('click', function(){
        $(this).find('input').prop('checked', true).trigger('change');
      });
    });
  }
})(jQuery);