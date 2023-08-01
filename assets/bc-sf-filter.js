// Override Settings
var bcSfFilterSettings = {
    general: {
        limit:50,
        /* Optional */
        // loadProductFirst: true,
    }
};


var all_rel = bcSfFilterConfig.label.xyz;
if(all_rel){
var myString = String(all_rel);
myString = myString.split('#').reverse();
var total = myString.length;
  
}

var all_swatch = bcSfFilterConfig.label.index9;
if(all_swatch){
var all_swatch2 = String(all_swatch);
all_swatch2 = all_swatch2.split('#').reverse();
var total_swatch = all_swatch2.length;
  
}

var allFeatImageUrls = bcSfFilterConfig.label.featImgUrls;
if(allFeatImageUrls){
var myString3 = String(allFeatImageUrls);
myString3 = myString3.split('#').reverse();
}

var allHoverImageUrls = bcSfFilterConfig.label.hoverImgUrls;
if(allHoverImageUrls){
var myString4 = String(allHoverImageUrls);
myString4 = myString4.split('#').reverse();
}



var ptitles = bcSfFilterConfig.label.ptitles;
if(ptitles){
var myString5 = String(ptitles);
myString5 = myString5.split('#').reverse();
}
var collectionUrl = bcSfFilterConfig.label.collectionUrl;
// Declare Templates


var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on -sale',
    'swatches': bcSfFilterConfig.swatches,
    'soldOutLabelHtml': '<div>' + bcSfFilterConfig.label.sold_out + '</div>',
    'saleLabelHtml': '<div>' + bcSfFilterConfig.label.sale + '</div>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',
  'currentProduct':'{{itemHandle}}',
    // Grid Template
  
  'productGridItemHtml': '<div class="{{itemCollection}} grid__item small--one medium-up--one-third " data-attr="{{itemHandle}}" data-title="{{itemTitle}}" data-rel="">' +
  							'<div class="grid-view-item product-card prod_image">' +                              
  							'<a href="{{itemUrl}}" data-attr="'+collectionUrl+'" class="grid-view-item__link {{itemHandle}}">' +
  								'<div class="product-card-bkgd">' + 
                                    '<div class="no-reveal">' + 
                                        '<img class="grid-view-item__image first_img" src="{{itemThumbUrl}}" alt="{{itemTitle}}">' + 
                                        '<img class="roll_over hidden second_img" src="{{itemAltThumbUrl}}" alt="{{itemTitle}}">' + 
                                        '<img class="grid-view-item__image append hidden" src="https://cdn.shopify.com/s/files/1/2659/0318/files/TCA-2.png?10028" alt="">' +
                                        '<img class="roll_over append_hover hidden" src="https://cdn.shopify.com/s/files/1/2659/0318/files/TCA-2.png?10028" alt="">' +
                                    '</div>' + 
                                '</div>' +
  								'</a>'+
 							 '</div>'+
  								'<div class="grid-view-item product-card product-card-content">' +
                                    '<a href="{{itemUrl}}" data-attr="'+collectionUrl+'" class="grid-view-item__link {{itemHandle}}">' +
  										'<div class="xyzs hidden">'+myString+'</div>' +
  										'<div class="xyzs hidden">'+all_swatch2+'</div>' +
  										'<div class="xyzs hidden">'+myString3+'</div>' +
  										'<div class="xyzs hidden">'+myString4+'</div>' +
                                        '<span class="stamped-product-reviews-badge" data-id="{{itemId}}"></span>' +

                                        '<div class="product-card-content">' +
                                            '<div class="card__meta">' +
                                            '<span class="grid-view-item__meta_title">' + 
                                                '<div class="h4 grid-view-item__title"><p>{{itemTitle}}</p></div>' +
                                                '<span class="h6 colourValue">{{itemSwatches}}</span>' +
                                            '</span>' +
                                            '<span class="h4 grid-view-item__meta price">' + 
                                                '{{itemPrice}}' +
                                                '<span class="{{soldOutClass}} {{saleClass}}">' +
                                                '<span class="grid-link__image {{imageSoldOutClass}} grid-link__image--product">' +
                                                    '<span class="h6 soldout-label">{{itemSoldOutLabel}}</span>' +
                                                '</span>' +
                                            '</span>' +
                                            '</span>' +
                                            '</div>' +
                                        '</div>' +
                                    '</a>' +
                                '</div>',

    // Pagination Template
    'previousActiveHtml': '<li><a href="{{itemUrl}}"><svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" stroke="#111" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M9 1L1 9M1 9l8 8"/></g></svg></a></li>',
    'previousDisabledHtml': '<li class="disabled"><span>&larr;</span></li>',
    'nextActiveHtml': '<li><a href="{{itemUrl}}"><svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g stroke-width="2" stroke="#111" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l8 8M9 9l-8 8"/></g></g></svg></a></li>',
    'nextDisabledHtml': '<li class="disabled"><span>&rarr;</span></li>',
    'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
    'pageItemSelectedHtml': '<li><span class="active">{{itemTitle}}</span></li>',
    'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
    'paginateHtml': '<ul class="pagination-custom" id="pagination_v">{{previous}}{{pageItems}}{{next}}</ul>',
  
    // Sorting Template
    'sortingHtml': '<label class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select class="collection-sort__input">{{sortingItems}}</select>',

};

/************************** BUILD PRODUCT LIST **************************/

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
  
  	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  	function capital_letter(str) 
    {
        str = str.split(" ");

        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }

        return str.join(" ");
    }
    var page = getParameterByName('page');
  	var p_color = getParameterByName('pf_t_colour');
  	var p_size = getParameterByName('pf_t_colour');

    if(page){
    page = page;
    }else{
    page = 1;
    }
  
  
  	var index1 = index;
  	if(page > 1){
    index1 = 50*(page-1)+index;
    }
  
    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;
  	//var findIndex2 = (myString5.indexOf(data.handle) > -1);
  if(myString5){
  var findIndex2 = myString5.indexOf(data.handle);
    var cptitle = data.title;
    var cphandle = data.handle;
  }
  	
  if(myString && findIndex2 >= 0){
  
  	var relProducts = myString[findIndex2].split('@');
    var allrelProducts = relProducts[1];
    allrelProducts = allrelProducts.split(',');
    /*** End Prepare data ***/
   }
  
  
  
  	if(allrelProducts){
//       if(findIndex2 >= 1){
//       var relProducts2 = myString[findIndex2].split('@');
//     var allrelProducts2 = relProducts2[1];
//       }
      
      
	itemHtml += '<div class="ghjk '+data.hide_class+' '+data.index_class+'" data-attr="'+findIndex2+" - "+page+'">';
	
    for(n = 0; n < allrelProducts.length-1; n++){
      var colorSpan = allrelProducts[n].split('colour-');
      colorSpan = colorSpan[1];
      var tcolor = colorSpan.replace(/-/g, " ");
      tcolor = capital_letter(tcolor);
      var findIndex = myString5.indexOf(allrelProducts[n]);
      if(data.handle == allrelProducts[n]){
      var actClass = 'active';
      }else{
      var actClass = '';
      }
      itemHtml += '<span class="relProductBox '+actClass+'" data-rel="'+myString4[findIndex]+'" data-attr="'+myString3[findIndex]+'" data-col="'+tcolor+'" id="'+allrelProducts[n]+'" style="background:url(//cdn.shopify.com/s/files/1/2659/0318/files/'+colorSpan+'_120x.png)" ></span>';
    
    }
    itemHtml += '</div>';
    }
  	itemHtml += '</div>';
  
  setTimeout(function(){ 
  	var preTitle = $('div[data-attr="'+cphandle+'"]').prev('.grid__item').attr('data-title');
    var thisTitle = $('div[data-attr="'+cphandle+'"]').attr('data-title');
     $('div[data-attr="'+cphandle+'"]').attr('data-rel',preTitle+' - '+thisTitle);
    if(preTitle == thisTitle){
    $('div[data-attr="'+cphandle+'"]').remove();
    }

    $('.hide_me').parent().remove();
    $('span.relProductBox').click(function(){
      	var imgSrc = $(this).attr('data-attr');
      	var imgSrc2 = $(this).attr('data-rel');
      	var handle = $(this).attr('id');
      	var cvalue = $(this).attr('data-col');
      	//alert(imgSrc);
    	var imgWrapper = $(this).parent('.ghjk').siblings('.product-card').find('img.append');
      	var imgWrapper2 = $(this).parent('.ghjk').siblings('.product-card').find('img.append_hover');
      	var prodLink = $(this).parent('.ghjk').siblings('.product-card').find('.grid-view-item__link');
      	var colLink = $(this).parent('.ghjk').siblings('.product-card').find('.colourValue');	
      	$(imgWrapper).attr('src',imgSrc);
      	$(imgWrapper2).attr('src',imgSrc2);
      	$(this).parent('.ghjk').siblings('.product-card').find('img.first_img, img.second_img').remove();
      	$(imgWrapper).removeClass('hidden');
      	$(prodLink).attr('href',$(prodLink).attr('data-attr')+"/products/"+handle);
      	$(colLink).text(cvalue);
      	$(this).siblings('.relProductBox').removeClass('active');
      	$(this).addClass('active');
      //alert(imgWrapper);
    });
  
  }, 1);
  
    // Add Thumbnail
    var images = Object.keys(data.images).map(function (key) { return data.images[key]; });
    
    if (images.length <= 1) {
        itemHtml = itemHtml.replace('<img class="hidden" src="{{itemAltThumbUrl}}" alt="{{itemTitle}}">', '');
    }

    if (images.length > 1) {
        itemHtml = itemHtml.replace('no-reveal', 'reveal');
    }

    var thumbUrl = images.length > 0 ? this.optimizeImage(images[0],'600x600')  : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, thumbUrl);

    var thumbAltUrl = images.length > 1 ? this.optimizeImage(images[1],'600x600') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemAltThumbUrl}}/g, thumbAltUrl);

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '')  {
        itemPriceHtml += '<p class="grid-link__meta">';
        if (onSale) {
            itemPriceHtml += '<s class="grid-link__sale_price">' + this.formatMoney(data.compare_at_price_min) + '</s> ';
        }
        if (priceVaries) {
            itemPriceHtml += (bcSfFilterConfig.label.from_price).replace(/{{ price }}/g, this.formatMoney(data.price_min));
        } else {
            itemPriceHtml += this.formatMoney(data.price_min);
        }
        itemPriceHtml += '</p>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  
    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  
    // Add soldOut Label
    var itemSoldOutLabelHtml = soldOut ? bcSfFilterTemplate.soldOutLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabelHtml);

    // Add onSale Label
    var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add main attribute (Always put at the end of this function)
    var colorValue = _.filter(data.options_with_values, function(option) {
        return option.name.indexOf('colour') >= 0 || option.name.indexOf('color') >= 0
    })[0]

    var colorValuefoo = (typeof colorValue !== 'undefined') ? colorValue.values[0].title : '';

    itemHtml = itemHtml.replace(/{{itemSwatches}}/g, colorValuefoo);
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  	var langId = getLangId();
    var title = data.title;
    var metaTitle = this.getProductMetafield( data , langId , 'title' );
    if( metaTitle !== null){
        title = metaTitle;
    }
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
    // // Add Description
    // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    // // Truncate by word
    // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
    // // Truncate by character
    // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
    // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Featured image
      
      var curr_prod_handle = data[k]['handle'];
      curr_prod_handle = curr_prod_handle.split('-colour');
      curr_prod_handle = curr_prod_handle[0];
      //alert(compare_prod);
//       if(k > 0){
//       var curr_prod_handle2 = data[k-1]['handle'];
//       curr_prod_handle2 = curr_prod_handle2.split('-colour');
//       curr_prod_handle2 = curr_prod_handle2[0];
//         data[k]['index_class'] = k;
//         if(curr_prod_handle == curr_prod_handle2){
//       	data[k]['hide_class'] = "hide_me";
//         }else{
//           data[k]['hide_class'] = '';
//         }
//       }
      
        if (data['images_info'] > 0) {
            data[k]['featured_image'] = data['images_info'][0];
        } else {
            data[k]['featured_image'] = {width: '', height: '', aspect_ratio: 0}
        }

        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    if (this.getSettingValue('general.paginationType') == 'default') {
//         setTimeout(function() {
//             SPR.initDomEls('.shopify-product-reviews-badge');
//             SPR.loadBadges();
//         }, 1500)
// StampedFn.loadBadges();
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                afterCurrentPageArr.push(totalPage);
            }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};

/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
  
  
  
  
};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
  jQ('.bc-sf-filter-option-value').addClass('translatable');
  
  _.map($('.bc-sf-filter-option-multiple-list'), function(list) {
    var children = $(list).children();
    Array.from(children).forEach(function(item) {
      if ($(item).text().indexOf('-') > 0) {
        $(item).find('.bc-sf-filter-option-value').text($(item).find('.bc-sf-filter-option-value').text().replace('-', ' '))
      }
    })
  });

  setTimeout(function() {
    if(typeof SPR != 'undefined'){
      SPR.initDomEls('.shopify-product-reviews-badge');
      SPR.loadBadges();
    }
  }, 1500);
  if(typeof StampedFn != 'undefined'){
    StampedFn.loadBadges();	
  }
};

function getLangId() {
    var lang = langify.helper.getSelectedLanguage();
    return lang;
}

BCSfFilter.prototype.buildFilterOptionSwatchData = function(fOType, fOId, fOLabel, fODisplayType, fOSelectType, fOItemValue, fOData) {
    if (this.checkShowFilterOptionItem(fOItemValue, fOData)) {
        var iLabel = fOItemValue.key, iValue = fOItemValue.key;
        var swatchName = iValue;
        if (fOType == 'collection') {
            iLabel = fOItemValue.label, iValue = fOItemValue.handle;
            swatchName = iLabel;
        }

        var colorOptionsArr = this.getSettingValue('general.colorOptionsArr');
        // Get prefix of swatch from filter option id
        // Ex: By option: pf_opt_color -> color, pf_opt_size -> size
        //     By tag: pf_t_color -> color, pf_t_dimension -> dimension
        var prefixSwatch = fOId.replace('pf_t_', '').replace('pf_opt_', '');
        // Deprecated
        if (colorOptionsArr != '') {
            var isColor = colorOptionsArr.filter(function(item) {
                return fOId.indexOf(item) > -1;
            });
            if (typeof isColor[0] !== 'undefined') {
                prefixSwatch = 'color';
            }
        }
        // Get Swatch name
        swatchName = this.customizeSwatchFileName(swatchName, fOItemValue, fOData);
        // Get item HTML Template & Build data
        var html = this.getTemplate('filterOptionSwatchItem');
        html = this.buildFilterOptionItem(html, iLabel, iValue, fOType, fOId, fOLabel, fODisplayType, fOSelectType, fOItemValue, fOData);
        // Add Image
        var filePath = getFilePath('color-color-' + swatchName, this.swatchExtension, this.getSettingValue('general.swatchImageVersion'));
        html = html.replace(/{{itemImageValue}}/g, filePath);
        // Add border
        var border = '1px solid #cbcbcb';
        html = html.replace(/{{itemBorder}}/g, border);
        return html;
    }
    return '';
};


/* Start Fix version 2.3.2 */
BCSfFilter.prototype.addFilterTreeItem=function(e,r,t,i){e=jQ.parseHTML(e),i=void 0!==i?i:this.getSelector("filterTree");void 0!==r&&"before"==r?jQ(i+t).prepend(e):jQ(i+t).append(e)};
/* End Fix version 2.3.2 */

// Fix image url issue of swatch option
function getFilePath(fileName, ext, version) {
    var self = bcsffilter;
    var ext = typeof ext !== 'undefined' ? ext : 'png';
    var version = typeof version !== 'undefined' ? version : '1';
    var prIndex = self.fileUrl.lastIndexOf('?');
    if (prIndex > 0) {
        var filePath = self.fileUrl.substring(0, prIndex);
    } else {
        var filePath = self.fileUrl;
    }
    filePath += fileName + '.' + ext + '?v=' + version;
    return filePath;
}

BCSfFilter.prototype.getFilterData=function(eventType,errorCount){function BCSend(eventType,errorCount){var self=bcsffilter;var errorCount=typeof errorCount!=="undefined"?errorCount:0;self.showLoading();if(typeof self.buildPlaceholderProductList=="function"){self.buildPlaceholderProductList(eventType)}self.beforeGetFilterData(eventType);self.prepareRequestParams(eventType);self.queryParams["callback"]="BCSfFilterCallback";self.queryParams["event_type"]=eventType;var url=self.isSearchPage()?self.getApiUrl("search"):self.getApiUrl("filter");var script=document.createElement("script");script.type="text/javascript";var timestamp=(new Date).getTime();script.src=url+"?t="+timestamp+"&"+jQ.param(self.queryParams);script.id="bc-sf-filter-script";script.async=true;var resendAPITimer,resendAPIDuration;resendAPIDuration=2e3;script.addEventListener("error",function(e){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}if(errorCount<3){errorCount++;if(resendAPITimer){clearTimeout(resendAPITimer)}resendAPITimer=setTimeout(self.getFilterData("resend",errorCount),resendAPIDuration)}else{self.buildDefaultElements(eventType)}});document.getElementsByTagName("head")[0].appendChild(script);script.onload=function(){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}}}this.requestFilter(BCSend,eventType,errorCount)};BCSfFilter.prototype.requestFilter=function(sendFunc,eventType,errorCount){sendFunc(eventType,errorCount)};


/* start-boost-2.4.8 */
BCSfFilter.prototype.buildFilterOptionItem=function(html,iLabel,iValue,fOType,fOId,fOLabel,fODisplayType,fOSelectType,fOItemValue,fOData){var keepValuesStatic=fOData.hasOwnProperty("keepValuesStatic")?fOData.keepValuesStatic:false;if(fOType=="review_ratings"&&this.getSettingValue("general.ratingSelectionStyle")=="text"){var title=this.getReviewRatingsLabel(fOItemValue.from)}else{var title=this.customizeFilterOptionLabel(iLabel,fOData.prefix,fOType)}if(keepValuesStatic===true)var productNumber=null;else var productNumber=fOItemValue.hasOwnProperty("doc_count")?fOItemValue.doc_count:0;html=html.replace(/{{itemLabel}}/g,this.buildFilterOptionLabel(iLabel,productNumber,fOData));html=html.replace(/{{itemLink}}/g,this.buildFilterOptionLink(fOId,iValue,fOType,fODisplayType,fOSelectType,keepValuesStatic));html=html.replace(/{{itemValue}}/g,encodeURIParamValue(iValue));html=html.replace(/{{itemTitle}}/g,title);html=html.replace(/{{itemFunc}}/g,"onInteractWithFilterOptionValue(event, this, '"+fOType+"', '"+fODisplayType+"', '"+fOSelectType+"', '"+keepValuesStatic+"')");html=this.checkFilterOptionSelected(fOId,iValue,fOType,fODisplayType)?html.replace(/{{itemSelected}}/g,"selected"):html.replace(/{{itemSelected}}/g,"");var htmlElement=jQ(html);htmlElement.children().attr({"data-id":fOId,"data-value":encodeURIParamValue(iValue),"data-parent-label":fOLabel,"data-title":title,"data-count":productNumber});if(fOType!="collection"){htmlElement.children().attr("rel","nofollow")}if(fOType=="collection")htmlElement.children().attr("data-collection-scope",fOItemValue.key);return jQ(htmlElement)[0].outerHTML};
/* end-boost-2.4.8 */

/* Begin patch boost-010 run 2 */
BCSfFilter.prototype.initFilter=function(){return this.isBadUrl()?void(window.location.href=window.location.pathname):(this.updateApiParams(!1),void this.getFilterData("init"))},BCSfFilter.prototype.isBadUrl=function(){try{var t=decodeURIComponent(window.location.search).split("&"),e=!1;if(t.length>0)for(var i=0;i<t.length;i++){var n=t[i],a=(n.match(/</g)||[]).length,r=(n.match(/>/g)||[]).length,o=(n.match(/alert\(/g)||[]).length,h=(n.match(/execCommand/g)||[]).length;if(a>0&&r>0||a>1||r>1||o||h){e=!0;break}}return e}catch(l){return!0}};
/* End patch boost-010 run 2 */
