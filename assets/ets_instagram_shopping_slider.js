var eiss_break_request=0;function eissGetSessionPhoto(l,e,t,s,u,p){u=void 0!==u&&u,p=void 0!==p&&p;var i=parseInt(jQueryETS(l).attr("data-init-displayed")),h=jQueryETS(l).attr("data-max-displayed")?parseInt(jQueryETS(l).attr("data-max-displayed")):"",a=jQueryETS(l).attr("data-carousel-displayed")?parseInt(jQueryETS(l).attr("data-carousel-displayed")):"",y=parseInt(jQueryETS(l).attr("data-per-row-desktop")),f=parseInt(jQueryETS(l).attr("data-per-row-tablet")),S=parseInt(jQueryETS(l).attr("data-per-row-mobile")),m=parseInt(jQueryETS(l).attr("data-photo-spacing")),g=jQueryETS(l).attr("data-layout-type"),T=parseInt(jQueryETS(l).attr("data-carousel-autoplay")),_=parseInt(jQueryETS(l).attr("data-carousel-delay")),E=parseInt(jQueryETS(l).attr("data-carousel-loop")),o=jQueryETS(l).attr("data-photo-gallery"),r=jQueryETS(l).attr("data-photo-filter-init"),n=jQueryETS(l).attr("data-photo-filter-hover"),v="true"==jQueryETS(l).attr("data-slide-mobile")?1:0,b=jQueryETS(l).attr("data-shopnow-enable"),j=jQueryETS(l).attr("data-shopnow-title"),d=jQueryETS(l).attr("data-shopnow-bg-color"),c=jQueryETS(l).attr("data-shopnow-bg-color-hover"),Q=jQueryETS(l).attr("data-shopnow-border-color"),x=jQueryETS(l).attr("data-shopnow-border-color-hover"),w=jQueryETS(l).attr("data-shopnow-text-color"),A=jQueryETS(l).attr("data-shopnow-text-color-hover"),k=jQueryETS(l).attr("data-shopnow-title-photo"),C=jQueryETS(l).attr("data-shopnow-title-video"),I=parseInt(jQueryETS(l).attr("data-show-btn-loadmore")),P=parseInt(jQueryETS(l).attr("data-show-comment")),G=jQueryETS(l).attr("data-view-cart"),D=jQueryETS(l).attr("data-auto-loadmore"),H="";switch(r){case"greyout":H+=" eiss-filter-greyout";break;case"sepia":H+=" eiss-filter-sepia";break;case"saturate":H+=" eiss-filter-saturate";break;case"contrast":H+=" eiss-filter-contrast";break;case"hue_rotate":H+=" eiss-filter-hue-rotate";break;case"opacity":H+=" eiss-filter-opacity";break;case"invert":H+=" eiss-filter-invert";break;case"blur":H+=" eiss-filter-blur";break;case"brightness":H+=" eiss-filter-brightness"}switch(n){case"greyout":H+=" eiss-filter-greyout-hover";break;case"sepia":H+=" eiss-filter-sepia-hover";break;case"saturate":H+=" eiss-filter-saturate-hover";break;case"contrast":H+=" eiss-filter-contrast-hover";break;case"hue_rotate":H+=" eiss-filter-hue-rotate-hover";break;case"opacity":H+=" eiss-filter-opacity-hover";break;case"invert":H+=" eiss-filter-invert-hover";break;case"blur":H+=" eiss-filter-blur-hover";break;case"brightness":H+=" eiss-filter-brightness-hover";break;default:H+=" eiss-filter-default-hover"}var L="eiss_shopnow_"+eissGetRandomInt(11111,999999),R='<style type="text/css">';R+=".eiss-btn-show-slide-photo."+L+"{background:"+(d||"#ffffff")+";border-color:"+(Q||"#ffffff")+";color:"+(w||"#333333")+";}",R+=".eiss-btn-show-slide-photo."+L+":hover,.eiss-btn-show-slide-photo."+L+":focus{background:"+(c||"#ffffff")+";border-color:"+(x||"#ffffff")+";color:"+(A||"#333333")+";}",R+="</style>",jQueryETS(l).prepend(R);var O=jQueryETS(l),F=y;t<992&&768<=t?F=f:t<768&&(F=S);var N=O.innerWidth(),M=50;switch(12/F){case 1:M=8.33333333*N/100;break;case 2:M=16.66666667*N/100;break;case 3:M=25*N/100;break;case 4:case 6:M=33.33333333*N/100;break;case 12:M=N}var U=parseInt(M);N<1200&&jQueryETS(l).find(".ets-iss-section-heading").addClass("eiss-header-sm"),U<200&&120<U?jQueryETS(l).addClass("eiss-img-sm"):U<=120?(jQueryETS(l).removeClass("eiss-img-sm"),jQueryETS(l).addClass("eiss-img-xs")):(jQueryETS(l).removeClass("eiss-img-sm"),jQueryETS(l).removeClass("eiss-img-xs")),O.find(".eiss-slick-slide").length&&(U<200?O.find(".eiss-slick-slide").addClass("eiss-slick-small"):O.find(".eiss-slick-slide").removeClass("eiss-slick-small")),"carousel"!==g&&""!=h&&h<i&&(i=h);var q=i||18,J=O.find(".eiss-item").length;if("carousel"!==g?(""!=h&&0<J&&J<h&&(q=h-J),i&&i<q&&(q=i)):q=a||18,20<q&&(q=20),s){if("object"==typeof ETS_ISS_TAG_CACHE_DATA.data&&void 0===ETS_ISS_TAG_CACHE_DATA.data.length){var V=Object.keys(ETS_ISS_TAG_CACHE_DATA.data).map(function(e){return ETS_ISS_TAG_CACHE_DATA.data[e]});ETS_ISS_TAG_CACHE_DATA.data=V}if(e=eissUpdateQueryStringParameter(e,"count",q),"all"==o)jQueryETS.ajax({url:eissUpdateQueryStringParameter(e,"count",q),type:"GET",dataType:-1!==e.indexOf("api.instagram.com")?"jsonp":"json",beforeSend:function(){0<O.find(".eiss-loadmore-box").length&&O.find(".eiss-loadmore-box").remove(),O.find(".ets-iss-photos").append('<div class="eiss-loading"><div class="eiss-loader"></div> <span class="eiss-text-loading">Loading...</span></div>')},success:function(e){if(void 0!==e.data&&0<e.data.length){u&&O.find(".ets-iss-photos").html("");var t=e.data,s="",i=t.length,a=void 0!==e.pagination.next_url?e.pagination.next_url:"";t.length>q&&(a=eissUpdateQueryStringParameter(a=eissUpdateQueryStringParameter(a,"max_id",t[q-1].id),"count_photo",q),i=q);for(var o=0;o<i;o++){var r=t[o];if(r.images&&r.images.standard_resolution){var n=m||0;if(!O.find(".eiss-slick-slide").length)0==(o+1)%F&&(n=0);var d=eissGetRandomInt(1111111,99999999999);s+='<div class="eiss-item eiss-col-'+12/F+" eiss_item_photo_"+r.id+' eiss-opacity-hide" style="padding-right: '+n+"px; padding-bottom:"+(m||0)+"px; height: "+M+'px; visibility: visible;">',s+='<div class="eiss-outer-img">',s+='<a data-options=\'{"touch" : false}\'  href="'+("video"==r.type?r.videos.standard_resolution.url:r.images.standard_resolution.url)+'" '+(1==b?"":'title="Click to view '+("video"==r.type?"video":"photo")+' in full"')+' data-ets-fancybox="images" class="eiss-fancybox-item" data-idvideo="iess_video_'+d+'" data-url="'+r.images.standard_resolution.url+'" data-likes="'+r.likes.count+'" data-comments="'+r.comments.count+'" data-link="'+r.link+'" data-cat="'+r.type+'" data-idmedia="'+r.id+'" data-tus="'+(r.caption?eissAddslashes(r.caption.text):"")+'" data-tags="'+(r.tags.length?r.tags.join(","):"")+'" data-userprofile="'+(void 0!==r.user.profile_picture?r.user.profile_picture:"")+'" data-username="'+r.user.username+'" data-show_comment="'+P+'" data-view_cart="'+G+'" data-created_time="'+r.created_time+'">',s+='<div class="eiss-box-outer-tag-photo">',s+='<img src="'+r.images.standard_resolution.url+'" class="ets-iss-img '+H+'"/>',"video"==r.type&&(s+='<span class="eiss-play-icon"></span>');var c=null;void 0!==ETS_ISS_TAG_CACHE_DATA.data&&ETS_ISS_TAG_CACHE_DATA.data.length&&(jQueryETS.each(ETS_ISS_TAG_CACHE_DATA.data,function(e,t){t.id!=r.id||(c=t)}),c&&void 0!==c.product_tags&&c.product_tags&&c.product_tags.length&&jQueryETS.each(c.product_tags,function(e,t){s+='<div class="eiss-product-tag-item tagged eiss_tag_point_thumb_'+t.id+'" title="'+t.product_title+(t.variant_title&&"null"!==t.variant_title?" | "+t.variant_title:"")+'" data-idmedia="'+r.id+'" style="top: '+t.position_top+"px; left: "+t.position_left+"px;"+("video"==r.type?"display:none;":"")+'" data-position-top="'+t.position_top+'" data-position-left="'+t.position_left+'" data-tag-key="'+(e+1)+'" data-tag-id="'+t.id+'" data-photo-width="'+t.photo_width+'" data-photo-height="'+t.photo_height+'" data-product-title="'+t.product_title+'" data-product-handle="'+t.product_handle+'" data-variant-title="'+t.variant_title+'" data-product-image="'+t.product_image+'" data-variant-id="'+t.variant_id+'" data-currency="'+(void 0!==ETS_ISS_TAG_CACHE_DATA.money_format?ETS_ISS_TAG_CACHE_DATA.currency:"")+'" data-money-format="'+(void 0!==ETS_ISS_TAG_CACHE_DATA.money_format?ETS_ISS_TAG_CACHE_DATA.money_format:"")+'" data-product-price="'+t.product_price+'">'+(e+1)+"</div>"})),s+="</div>",s+="</a>",1==b&&768<jQueryETS(window).width()&&(c&&void 0!==c.product_tags&&c.product_tags.length?s+='<button class="eiss-btn-show-slide-photo hide shopping-cart '+L+'">'+(j?15<j.length?j.substr(0,15)+"...":j:"Shop now")+"</button>":s+='<button class="eiss-btn-show-slide-photo hide show-slide '+L+'">'+("video"==r.type?C?15<C.length?C.substr(0,15)+"...":C:"Vide video":k?15<k.length?k.substr(0,15)+"...":k:"View photo")+"</button>"),s+='<div class="eiss-photo-params">',0<r.likes.count&&(s+='<span class="eiss-likes" title="Likes">'+r.likes.count+"</span>"),0<r.comments.count&&(s+='<span class="eiss-comments" title="Comments">'+r.comments.count+"</span>"),s+='<a href="'+r.link+'" class="eiss-view-photo-detail" target="_blank" title="'+("video"==r.type?"Click here to open video on Instagram":"Click here to open image on Instagram")+'"></a>',s+="</div>",s+="</div>",s+="</div>"}}O.find(".eiss-loading").remove(),e.pagination&&a&&(""==h||""!=h&&q+J<h)&&"carousel"!==g&&I&&(!v||v&&768<jQueryETS(window).width())&&(s+='<div class="eiss-loadmore-box"><button class="eiss-btn-loadmore js-eiss-loadmore-photo" data-url="'+a+'">Load more</button></div>'),O.find(".ets-iss-photos").append(s),u&&!p?jQueryETS(window).on("load",function(){setTimeout(function(){eissSetHeightPhoto(O)},200)}):setTimeout(function(){eissSetHeightPhoto(O)},200),eissInitSlickSlide(O,T,E,_,y,f,S,n,m,v),eissCalculatePositionTag(O),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").length&&eissCalculatePositionTag(O,!0),eissInitFancybox(l),eissCheckPhotoError(O),jQueryETS(window).resize(function(e){var t=jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content video").length?jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content video").height():jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content img").height();jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-fancybox-popup-left").css("height",t),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-fancybox-popup-left").length||(jQueryETS(window).width()<=767?jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").animate({left:0}):jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").animate({left:"25%"}));var s=(jQueryETS(".eiss-fancybox").height()-jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").height())/2;jQueryETS(".eiss-fancybox-slide.fancybox-slide--current").css("padding-top",s+"px")})}else O.find(".ets-iss-photos").append('<p class="ets-iss-aler-no-photo">No Instagram photos available. Instagram access token is not correct, please update Instagram access token</p>')},complete:function(){O.find(".eiss-loading").remove()}});else if("featured"==o||"tagged"==o)if(void 0!==ETS_ISS_TAG_CACHE_DATA.data&&ETS_ISS_TAG_CACHE_DATA.data.length){O.find(".ets-iss-photos").append('<div class="eiss-loading"><div class="eiss-loader"></div> <span class="eiss-text-loading">Loading...</span></div>');var z=[],K=h;"carousel"==g&&(K=i);var Y=(z="featured"==o?eissSortArrayAsc(z=eissGetFeaturedPhotos(ETS_ISS_TAG_CACHE_DATA.data,K),"sort_featured"):eissSortArrayAsc(z=eissGetTaggedPhotos(ETS_ISS_TAG_CACHE_DATA.data,K),"sort_tagged")).length;"carousel"==g&&i<Y&&(Y=i);for(var $="",B=0;B<Y;B++){var W=z[B];if(W.thumb_src){var X=m||0;if(!O.find(".eiss-slick-slide").length)0==(B+1)%F&&(X=0);var Z=eissGetRandomInt(1111111,99999999999);$+='<div class="eiss-item eiss-col-'+12/F+" eiss_item_photo_"+W.id+" eiss-opacity-hide "+(i<=B?"eiss-hidden-photo":"")+'" style="padding-right: '+X+"px; padding-bottom:"+(m||0)+"px; height:"+M+'px;">',$+='<div class="eiss-outer-img">',$+='<a href="'+("video"==W.type?W.media_src:W.thumb_src)+'" title="Click to view '+("video"==W.type?"video":"photo")+' in full" data-ets-fancybox="images" class="eiss-fancybox-item" data-idvideo="iess_video_'+Z+'" data-url="'+W.thumb_src+'" data-likes="'+W.likes+'" data-comments="'+W.comments+'" data-link="'+W.link+'" data-cat="'+W.type+'" data-idmedia="'+W.id+'" data-tus="'+(W.caption?eissAddslashes(W.caption):"")+'" data-tags="'+(void 0!==W.tags&&0<W.tags.length?W.tags.join(","):"")+'" data-userprofile="'+(" undefined"!=typeof W.userprofile?W.userprofile:"")+'" data-username="'+(void 0!==W.username?W.username:"")+'" data-show_comment="'+P+'" data-view_cart="'+G+'" data-created_time="'+(void 0!==W.created_time?W.created_time:"")+'">',$+='<div class="eiss-box-outer-tag-photo">',$+='<img src="'+W.thumb_src+'" class="ets-iss-img '+H+'"/>',"video"==W.type&&($+='<span class="eiss-play-icon"></span>'),void 0!==W.product_tags&&jQueryETS.each(W.product_tags,function(e,t){$+='<div class="eiss-product-tag-item tagged eiss_tag_point_thumb_'+t.id+'" title="'+t.product_title+(t.variant_title&&"null"!==t.variant_title?" | "+t.variant_title:"")+'" data-idmedia="'+W.id+'" style="top: '+t.position_top+"px; left: "+t.position_left+"px;"+("video"==W.type?"display:none;":"")+'" data-position-top="'+t.position_top+'" data-position-left="'+t.position_left+'" data-tag-key="'+(e+1)+'" data-tag-id="'+t.id+'" data-photo-width="'+t.photo_width+'" data-photo-height="'+t.photo_height+'" data-product-title="'+t.product_title+'" data-product-handle="'+t.product_handle+'" data-variant-title="'+t.variant_title+'" data-product-image="'+t.product_image+'" data-variant-id="'+t.variant_id+'" data-currency="'+(void 0!==ETS_ISS_TAG_CACHE_DATA.money_format?ETS_ISS_TAG_CACHE_DATA.currency:"")+'" data-money-format="'+(void 0!==ETS_ISS_TAG_CACHE_DATA.money_format?ETS_ISS_TAG_CACHE_DATA.money_format:"")+'" data-product-price="'+t.product_price+'">'+(e+1)+"</div>"}),$+="</div>",$+="</a>",1==b&&768<jQueryETS(window).width()&&(void 0!==W.product_tags&&W.product_tags.length?$+='<button class="eiss-btn-show-slide-photo hide shopping-cart '+L+'">'+(j?15<j.length?j.substr(0,15)+"...":j:"Shop now")+"</button>":$+='<button class="eiss-btn-show-slide-photo hide show-slide '+L+'">'+("video"==W.type?C?15<C.length?C.substr(0,15)+"...":C:"View video":k?15<k.length?k.substr(0,15)+"...":k:"View photo")+"</button>"),$+='<div class="eiss-photo-params">',0<W.likes&&($+='<span class="eiss-likes" title="Likes">'+W.likes+"</span>"),0<W.comments&&($+='<span class="eiss-comments" title="Comments">'+W.comments+"</span>"),$+='<a href="'+W.link+'" class="eiss-view-photo-detail" target="_blank" title="'+("video"==W.type?"Click here to open video on Instagram":"Click here to open image on Instagram")+'"></a>',$+="</div>",$+="</div>",$+="</div>"}}i<Y&&I&&(!v||v&&768<jQueryETS(window).width())&&($+='<div class="eiss-loadmore-box"><button class="eiss-btn-loadmore js-eiss-showmore-photo" data-number="'+i+'">Load more</button></div>'),O.find(".eiss-loading").remove(),O.find(".ets-iss-photos").append($),u&&!p?jQueryETS(window).on("load",function(){setTimeout(function(){eissSetHeightPhoto(O)},200)}):setTimeout(function(){eissSetHeightPhoto(O)},200),eissInitSlickSlide(O,T,E,_,y,f,S,X,m,v),eissCalculatePositionTag(O),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").length&&eissCalculatePositionTag(O,!0),eissInitFancybox(l),eissCheckPhotoError(O)}else O.find(".ets-iss-photos").append('<p class="ets-iss-aler-no-photo">No Instagram photos available</p>');var ee=jQueryETS(l).parent().attr("id");void 0!==ee&&"carousel"!=g&&1==I&&1==D&&jQueryETS(document).scroll(function(e){setTimeout(function(){eissScrollAutoLoad(ee)},500)})}else{q=0;jQueryETS(l).find(".eiss-item").each(function(e,t){jQueryETS(t).removeClass(function(e,t){return(t.match(/\eiss-col\S+/g)||[]).join(" ")}),jQueryETS(t).addClass("eiss-col-"+12/F);var s=m||0;O.find(".eiss-slick-slide").length&&(0==(q+1)%F&&(s=0));U-=s,jQueryETS(t).css("padding-right",s+"px"),q++}),setTimeout(function(){eissSetHeightPhoto(l),eissCalculatePositionTag(l)},200),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").length&&eissCalculatePositionTag(O,!0)}}function eissInitSlickSlide(e,t,s,i,a,o,r,n,d,c){c=void 0!==c?c:0;(e.find(".eiss-slick-slide").length||c&&jQueryETS(window).width()<=768)&&(e.find(".eiss-slick-slide").hasClass("eiss-slick-slide")||e.find(".ets-iss-photos").addClass("eiss-slick-slide"),e.find(".eiss-slick-slide").slick({dots:!1,infinite:!!s,speed:300,autoplay:0<t,autoplaySpeed:0<i?i:5e3,slidesToShow:a,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:o,slidesToScroll:o}},{breakpoint:767,settings:{slidesToShow:r,slidesToScroll:r}}]}),e.find(".ets-iss-photos .eiss-item").css({"padding-right":n+"px","padding-bottom":d+"px"}))}function eissInitFancybox(y){jQueryETS(y).find(".eiss-fancybox-item").fancybox({buttons:["slideShow","thumbs","share","close"],baseClass:"eiss-fancybox",slideClass:"eiss-fancybox-slide",loop:!1,toolbar:!0,touch:!1,closeBtn:!1,wheel:!1,zoomOpacity:0,transitionDuration:100,video:{autoStart:!1},beforeShow:function(e,t){jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content .eiss-product-tag-item").remove(),jQueryETS(y).find(" .eiss_item_photo_"+t.opts.idmedia+" .eiss-fancybox-item").hasClass("hover-point-tagged")&&jQueryETS.fancybox.close(),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-fancybox-popup-left").remove(),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").css("opacity",0)},afterShow:function(e,s){jQueryETS(window).width()<=768&&jQueryETS(".eiss-fancybox").addClass("eiss-fancybox-show-nav");var t=(jQueryETS(".eiss-fancybox").height()-jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").height())/2;if(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current").css("padding-top",t+"px"),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-idmedia",s.opts.idmedia),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-likes",s.opts.likes),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-comments",s.opts.comments),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-link",s.opts.link),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-tus",s.opts.tus),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-tags",s.opts.tags),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-cat",s.opts.cat),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-thumb_src",s.opts.thumb_src),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-media_src",s.opts.media_src),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr({"data-userprofile":s.opts.userprofile,"data-username":s.opts.username,"data-viewcart":s.opts.view_cart}),0==jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content .eiss-photo-product-tags").length&&jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").append('<div class="eiss-photo-product-tags"></div>'),jQueryETS(y).find(".eiss_item_photo_"+s.opts.idmedia+":first .eiss-product-tag-item").length&&"video"!=s.opts.cat){var i="";jQueryETS(y).find(".eiss_item_photo_"+s.opts.idmedia+":first .eiss-product-tag-item").each(function(e,t){i+='<div class="eiss-product-tag-item tagged eiss_tag_point_'+jQueryETS(this).attr("data-tag-id")+'" title="'+jQueryETS(this).attr("data-product-title")+'" data-photo-width="'+jQueryETS(this).attr("data-photo-width")+'" data-photo-height="'+jQueryETS(this).attr("data-photo-height")+'" data-idmedia="'+jQueryETS(this).attr("data-idmedia")+'" style="top: '+jQueryETS(this).attr("data-position-top")+"px; left: "+jQueryETS(this).attr("data-position-left")+'px;" data-position-top="'+jQueryETS(this).attr("data-position-top")+'" data-position-left="'+jQueryETS(this).attr("data-position-left")+'" data-tag-key="'+(e+1)+'" data-tag-id="'+jQueryETS(this).attr("data-tag-id")+'" data-product-handle="'+jQueryETS(this).attr("data-product-handle")+'">',i+=e+1,i+="</div>"}),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content .eiss-photo-product-tags").append(i)}var a='<div class="eiss-fancybox-popup-left">';if(a+='<div class="eiss-list-product-tagged eiss-append-tagged-products">',void 0!==s.opts.userprofile&&"undefined"!==s.opts.userprofile&&s.opts.userprofile&&(a+='<div class="eiss-fancybox-userdata">',a+='<div class="eiss-userprofile"><img src="'+s.opts.userprofile+'" class="eiss-user-avatar"></div>',a+='<div class="eiss-username"><a href="https://instagram.com/'+s.opts.username+'" target="_blank">'+s.opts.username+"</a></div>",a+='<div class="eiss-user-follow"><a href="https://instagram.com/'+s.opts.username+'" class="eiss-link-follow" target="_blank">Follow</a></div>',a+="</div>"),void 0!==ETS_ISS_TAG_CACHE_DATA.data&&0<ETS_ISS_TAG_CACHE_DATA.data.length&&jQueryETS(y).find(".eiss_item_photo_"+s.opts.idmedia+":first .eiss-product-tag-item").length&&(a+='<div class="eiss-caption-tagged-product">Related products</div>',a+='<div class="eiss-list-tagged-products__results '+("video"==s.opts.cat?"video-tags":"")+'" '+(s.opts.tus?"":'style="border-bottom: none;"')+">",jQueryETS(y).find(".eiss_item_photo_"+s.opts.idmedia+":first .eiss-product-tag-item").each(function(e,t){a+='<div class="eiss-tagged-product-item eiss_tag_product_'+jQueryETS(this).attr("data-tag-id")+'" data-tag-id="'+jQueryETS(this).attr("data-tag-id")+'" data-idmedia="'+s.opts.idmedia+'">',a+='<a href="/products/'+jQueryETS(this).attr("data-product-handle")+'" class="eiss-link-target-product">',"video"!=s.opts.cat&&(a+='<div class="eiss-tagged-product-point">'+(e+1)+"</div>"),a+='<div class="eiss-tagged-product-item__image">',jQueryETS(this).attr("data-product-image")&&"null"!=jQueryETS(this).attr("data-product-image")&&(a+='<img src="'+jQueryETS(this).attr("data-product-image")+'" alt="'+jQueryETS(this).attr("data-tag-id")+'">'),a+="</div>",a+='<div class="eiss-tagged-product-item__body">',a+='<span class="eiss-product-title">'+jQueryETS(this).attr("data-product-title")+"</span>",a+='<span class="eiss-variant-title">'+("null"!=jQueryETS(this).attr("data-variant-title")?jQueryETS(this).attr("data-variant-title"):"")+"</span>",a+="</div>",a+='<div class="eiss-tagged-product-item__action">',a+="<span>"+jQueryETS(this).attr("data-product-price")+" "+jQueryETS(this).attr("data-currency")+"</span>",jQueryETS(window).width()<=768&&(a+='<button class="eiss-btn-tagged-product-add-card cart-modile" data-variant="'+jQueryETS(this).attr("data-variant-id")+'"></button>'),a+="</div>",a+="</a>",768<jQueryETS(window).width()&&(a+='<button class="eiss-btn-tagged-product-add-card" data-variant="'+jQueryETS(this).attr("data-variant-id")+'">Add to cart</button>'),a+="</div>"}),a+="</div>"),s.opts.tus){if(a+='<div class="eiss-fancybox-desc">',s.opts.tags){var o=s.opts.tags.split(","),r=s.opts.tus,n=[];jQueryETS.each(o,function(e,t){-1==n.indexOf(t)&&(r=r.replace(new RegExp("#"+t,"g"),'<a href="https://www.instagram.com/explore/tags/'+t+'/" class="eiss-photo-tag" target="_blank">#'+t+"</a>"))}),n=[],a+=r}else a+=s.opts.tus;a+="</div>"}if(a+='<div class="eiss-fancybox-metadata">',s.opts.likes&&(a+='<span class="eiss-fancybox-metadata-likes">'+s.opts.likes+" Likes</span>"),s.opts.created_time){var d=new Date(1e3*parseInt(s.opts.created_time));a+='<span class="eiss-fancybox-metadata-time">'+eissGetMonth(d.getMonth())+" "+eissGetDayNTH(d.getDate())+" "+d.getFullYear()+"</span>"}a+="</div>",s.opts.comments&&(a+='<div class="eiss-fancybox-post-comments"></div>'),a+="</div>",a+='<div class="eiss-fancybox-popup-left__footer">',a+='<div class="eiss-fancybox-popup-left__footer_action">',a+='<div class="eiss-fancybox-link-insta">',a+='<a href="'+s.opts.link+'" class="eiss-target-photo-link" target="_blank">'+("video"==s.opts.cat?"Open this video on Instagram to like or comment":"Open this photo on Instagram to like or comment")+"</a>",a+="</div>",a+='<div class="eiss-fancybox-group-share">',a+='<a title="Share on facebook" href="https://www.facebook.com/sharer/sharer.php?u='+s.opts.link+'" target="_blank" class="eiss-photo-share facebook"></a>',a+='<a title="Share on twitter" href="https://twitter.com/intent/tweet?url='+s.opts.link+'" target="_blank" class="eiss-photo-share twitter"></a>',a+='<a title="Share on pinterest" href="http://pinterest.com/pin/create/button/?url='+s.opts.link+"&media="+s.opts.url+'" target="_blank" class="eiss-photo-share pinterest"></a>',a+='<a title="Share on tumblr" href="http://www.tumblr.com/share/link?url='+s.opts.link+'" target="_blank" class="eiss-photo-share tumblr"></a>',a+="</div>",a+="</div>",a+="</div>",a+="</div>",jQueryETS(".eiss-fancybox-slide.fancybox-slide--current").append(a),s.opts.comments&&1==s.opts.show_comment&&eissGetPostComments(y,s.opts.idmedia);var c,l,u=jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content video").length?jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content video").height():jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content img").height();if(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-fancybox-popup-left").css("height",u),eissCalculatePositionTag(y,!0),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").animate({opacity:1}),jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-fancybox-popup-left").animate({opacity:1}),"video"==s.opts.cat){var p=document.querySelector(".eiss-fancybox-slide.fancybox-slide--current video");void 0!==p&&768<jQueryETS(window).width()&&p.play()}var h=document.querySelector(".eiss-fancybox .fancybox-stage");h.addEventListener("touchstart",function(e){jQueryETS(e.target).is(".eiss-product-tag-item")&&jQueryETS(e.target).click(),l=e.changedTouches[0].clientY,c=l},!1),h.addEventListener("touchmove",function(e){l=e.touches[0].clientY,delta=l-c,this.scrollTop+=-1*delta,c=l},!1)}})}function eissGetPhotos(s,i,a,e){i=void 0!==i&&i,a=void 0!==a&&a,e=void 0!==e?e:"";var o="https://api.instagram.com/v1/users/self/media/recent/?access_token="+ETS_ISS_ACCESS_TOKEN;a&&ETS_ISS_INIT_CACHE_URL&&"{INIT_CACHE_URL}"!==ETS_ISS_INIT_CACHE_URL&&(o=ETS_ISS_INIT_CACHE_URL),e&&jQueryETS("#shopify-section-"+e+" .ets-instagram-ss").length?eissGetSessionPhoto("#shopify-section-"+e+" .ets-instagram-ss",o,s,i,a,!0):jQueryETS(".ets-instagram-ss").each(function(e,t){eissGetSessionPhoto(this,o,s,i,a)})}function eissGetRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function eissUpdateQueryStringParameter(e,t,s){var i=new RegExp("([?&])"+t+"=.*?(&|$)","i"),a=-1!==e.indexOf("?")?"&":"?";return e.match(i)?e.replace(i,"$1"+t+"="+s+"$2"):e+a+t+"="+s}function eissCalculatePositionTag(o,e){if(e=void 0!==e?e:""){if("video"!=jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-cat")&&jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-photo-product-tags .eiss-product-tag-item.tagged").length){var r=jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").first().width(),t=(parseFloat(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").width()),parseFloat(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-image").height()),parseFloat(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-photo-product-tags .eiss-product-tag-item.tagged").first().attr("data-photo-width"))),s=(parseFloat(jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-photo-product-tags .eiss-product-tag-item.tagged").first().attr("data-photo-height")),r/t);jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .eiss-photo-product-tags .eiss-product-tag-item.tagged").each(function(e,t){jQueryETS(this).css({left:jQueryETS(this).attr("data-position-left")*s-10,top:jQueryETS(this).attr("data-position-top")*s-10}),jQueryETS(this).removeClass("hidden")})}}else jQueryETS(o).find(".ets-iss-photos .eiss-item").each(function(e,t){if("video"!=jQueryETS(this).find(".eiss-fancybox-item").attr("data-cat")&&jQueryETS(this).find(".eiss-product-tag-item").length){r=jQueryETS(o).find(".eiss-item .eiss-outer-img").first().width();parseFloat(jQueryETS(this).find("img.ets-iss-img").width()),parseFloat(jQueryETS(this).find("img.ets-iss-img").height());var s=parseFloat(jQueryETS(this).find(".eiss-product-tag-item").first().attr("data-photo-width")),i=parseFloat(jQueryETS(this).find(".eiss-product-tag-item").first().attr("data-photo-height")),a=s<i?r/s:r/i;jQueryETS(this).find(".eiss-product-tag-item").each(function(e,t){jQueryETS(this).css({left:jQueryETS(this).attr("data-position-left")*a-10,top:jQueryETS(this).attr("data-position-top")*a-10}),jQueryETS(this).removeClass("hidden")})}})}function eissSetHeightPhoto(e){photo_width=jQueryETS(e).find(".eiss-item .eiss-outer-img").first().width(),photo_width<50&&(photo_width=parseFloat(localStorage.getItem("eiss_img_height"))),jQueryETS(e).find(".eiss-item .eiss-outer-img").css("height",parseFloat(photo_width)+"px"),jQueryETS(e).find(".eiss-item").css("height","auto"),localStorage.setItem("eiss_img_height",photo_width),jQueryETS(e).find(".eiss-item").each(function(e,t){var s=jQueryETS(this).find("img.ets-iss-img").width(),i=jQueryETS(this).find("img.ets-iss-img").height();if(s<i){var a=(i*(photo_width/s)-photo_width)/-2;jQueryETS(this).find(".eiss-box-outer-tag-photo").css({"margin-top":a,width:"100%","margin-left":"0"}),jQueryETS(this).find(".ets-iss-img").css("width","100%")}else if(i<s){a=(s*(photo_width/i)-photo_width)/-2;jQueryETS(this).find(".eiss-box-outer-tag-photo").css({"margin-left":a,height:"100%","margin-top":"0"}),jQueryETS(this).find(".ets-iss-img").css("height","100%")}else jQueryETS(this).find(".eiss-box-outer-tag-photo").css({width:"100%",margin:"0"}),jQueryETS(this).find(".ets-iss-img").css({width:"100%"});jQueryETS(this).removeClass("eiss-opacity-hide"),150<photo_width&&(jQueryETS(this).find(".eiss-btn-show-slide-photo").removeClass("hide"),photo_width<=220?jQueryETS(this).find(".eiss-btn-show-slide-photo").addClass("sm"):jQueryETS(this).find(".eiss-btn-show-slide-photo").removeClass("sm"),jQueryETS(this).find(".eiss-btn-show-slide-photo").css("left","calc(50% - "+jQueryETS(this).find(".eiss-btn-show-slide-photo").outerWidth(!0)/2+"px)"),jQueryETS(this).find(".eiss-btn-show-slide-photo").css("top","calc(50% - "+jQueryETS(this).find(".eiss-btn-show-slide-photo").outerHeight(!0)/2+"px)"))})}function eissGetFeaturedPhotos(e,t){t=void 0!==t?t:0;for(var s=[],i=0,a=0;a<e.length&&(void 0===e[a].featured||!e[a].featured||(s.push(e[a]),!t||++i!=t));a++);return s}function eissGetTaggedPhotos(e,t){t=void 0!==t?t:0;for(var s=[],i=0,a=0;a<e.length&&!(void 0!==e[a].product_tags&&0<e[a].product_tags.length&&(s.push(e[a]),t&&++i==t));a++);return s}function eissSortArrayAsc(e,t){for(var s=0;s<e.length-1;s++)for(var i=s+1;i<e.length;i++)if(void 0===e[s][t]&&(e[s][t]=0),void 0===e[i][t]&&(e[i][t]=0),e[i][t]<e[s][t]){var a=e[s];e[s]=e[i],e[i]=a}return e}function eissToastSuccess(e){var t='<div class="eiss-toast">';t+='<div class="eiss-toast-content">',t+='<span class="close js-eiss-close-toast">&times;</span>',t+='<div class="eiss-toast-body">'+e+"</div>",t+="</div>",t+="</div>",jQueryETS("body .eiss-toast").remove(),jQueryETS("body").append(t),setTimeout(function(){jQueryETS("body .eiss-toast").remove()},5e3)}function eissClearCache(){if("undefined"!=typeof ETS_ISS_APP_URL){var e=(new Date).getTime();jQueryETS.ajax({url:ETS_ISS_APP_URL+"/clients/clear-cache",type:"POST",dataType:"json",data:{shop:window.location.hostname.replace("wwww.",""),time_client:e},success:function(e){},error:function(){}})}}function eissAddslashes(e){return e.replace(/"/g,"'")}function eissCheckPhotoError(t){var e=jQueryETS(t).find("img.ets-iss-img ");e.length&&e.on("error",function(e){eiss_break_request||eissProccessPhotoError(t,jQueryETS(this).closest(".eiss-fancybox-item").attr("data-idmedia"),jQueryETS(this).attr("src"))})}function eissProccessPhotoError(t,s,e){if("undefined"!=typeof ETS_ISS_APP_URL){var i=jQueryETS(t).find("img.ets-iss-img ");0<i.length&&jQueryETS.ajax({url:ETS_ISS_APP_URL+"/clients/update-photo-error",type:"POST",data:{media_id:s,img_src:e,shop:window.location.hostname.replace("wwww.","")},dataType:"json",success:function(e){e.success?void 0!==e.media?(jQueryETS(".eiss_item_photo_"+s+" img.ets-iss-img").attr("src",e.media.thumb_src),jQueryETS(".eiss_item_photo_"+s+" .eiss-fancybox-item").attr("href",e.media.media_src),eissSetHeightPhoto(t),eissCalculatePositionTag(t)):i.closest(".slick-slide").length?i.closest(".slick-slide").remove():i.closest(".instagram-photo").remove():void 0!==e.break_request&&e.break_request&&(eiss_break_request=1)},error:function(){}})}}function eissGetPostComments(a,o){if(jQueryETS(a).find(".eiss_item_photo_"+o+" .eiss-comments-saved").length){var e=jQueryETS(a).find(".eiss_item_photo_"+o+" .eiss-comments-saved").html();jQueryETS(".eiss-fancybox-post-comments").html(e)}else jQueryETS.ajax({url:"https://api.instagram.com/v1/media/"+o+"/comments?access_token="+ETS_ISS_ACCESS_TOKEN,type:"GET",dataType:"jsonp",beforeSend:function(){jQueryETS(".eiss-fancybox-post-comments").html('<div class="eiss-comment-loading"><div class="eiss-comment-loader"></div></div>')},success:function(e){if(void 0!==e.data){for(var t=e.data,s="",i=0;i<t.length;i++)s+='<div class="eiss-comment-item">',s+='<div class="eiss-comment-user"><a href="https://api.instagram.com/'+t[i].from.username+'" target="_blank" title="'+t[i].from.username+'">'+t[i].from.username+"</a></div>",s+='<div class="eiss-comment-text">'+t[i].text+"</div>",s+="</div>";jQueryETS(".eiss-fancybox-post-comments").html(s),s&&jQueryETS(a).find(".eiss_item_photo_"+o).append('<div class="eiss-comments-saved">'+s+"</div>")}},complete:function(){jQueryETS(".eiss-fancybox-post-comments .eiss-comment-loading").remove()}})}function eissGetMonth(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}function eissGetDayNTH(e){if(3<e&&e<21)return e+"th";switch(e%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}function eissScrollAutoLoad(e){jQueryETS("#"+e+" .js-eiss-loadmore-photo").length&&jQueryETS(window).scrollTop()+jQueryETS(window).height()>=jQueryETS("#"+e).offset().top+jQueryETS("#"+e).height()&&jQueryETS("#"+e+" .js-eiss-loadmore-photo").click()}jQueryETS(function(){if("undefined"!=typeof ETS_ISS_ACCESS_TOKEN&&"undefined"!=typeof ETS_ISS_INIT_CACHE_URL&&"undefined"!=typeof ETS_ISS_TAG_CACHE_DATA&&"undefined"!=typeof ETS_ISS_APP_URL&&"undefined"!=typeof ETS_ISS_LAST_TIME_CLEAR){var e=0;jQueryETS("script").each(function(){-1==jQueryETS(this).text().indexOf("asyncLoad")||-1==jQueryETS(this).text().indexOf("ets_instagram_shopping_slider_init.js?")||(e=1)}),e&&ETS_ISS_APP_ENABLED&&(jQueryETS(".ets-iss-section").show(),eissGetPhotos(jQueryETS(window).width(),!0,!0),jQueryETS(window).resize(function(){eissGetPhotos(jQueryETS(window).width())}),jQueryETS(document).on("shopify:section:select",function(e){void 0!==e.detail&&void 0!==e.detail.sectionId&&e.detail.sectionId&&void 0!==e.detail.load&&e.detail.load&&(jQueryETS(".ets-iss-section").show(),eissGetPhotos(jQueryETS(window).width(),!0,!0,e.detail.sectionId))}),jQueryETS(document).on("shopify:section:load",function(e){void 0!==e.detail&&void 0!==e.detail.sectionId&&e.detail.sectionId&&setTimeout(function(){jQueryETS("#shopify-section-"+e.detail.sectionId+" .ets-iss-photos").html()||(jQueryETS(".ets-iss-section").show(),eissGetPhotos(jQueryETS(window).width(),!0,!0,e.detail.sectionId))},400)}),jQueryETS(document).on("click",".js-eiss-loadmore-photo",function(e){e.preventDefault();var t=jQueryETS(this).attr("data-url");eissGetSessionPhoto(jQueryETS(this).closest(".ets-instagram-ss"),t,jQueryETS(window).width(),!0)}),jQueryETS(document).on("click",".js-eiss-showmore-photo",function(e){e.preventDefault();var s=jQueryETS(this).attr("data-number");jQueryETS(this).closest(".ets-instagram-ss").find(".eiss-item.eiss-hidden-photo").each(function(e,t){e<s&&jQueryETS(this).removeClass("eiss-hidden-photo")}),0==jQueryETS(this).closest(".ets-instagram-ss").find(".eiss-item.eiss-hidden-photo").length&&jQueryETS(this).parent(".eiss-loadmore-box").remove()}),jQueryETS(document).on("mouseenter click",".eiss-fancybox-slide.fancybox-slide--current .eiss-list-tagged-products__results .eiss-tagged-product-item",function(e){768<jQueryETS(window).width()&&(jQueryETS(this).addClass("tag-hover"),jQueryETS(this).closest(".eiss-fancybox-slide.fancybox-slide--current").find(".eiss_tag_point_"+jQueryETS(this).attr("data-tag-id")).addClass("tag-hover"))}),jQueryETS(document).on("mouseleave",".eiss-fancybox-slide.fancybox-slide--current .eiss-list-tagged-products__results .eiss-tagged-product-item",function(e){e.preventDefault(),jQueryETS(this).removeClass("tag-hover"),jQueryETS(this).closest(".eiss-fancybox-slide.fancybox-slide--current").find(".eiss_tag_point_"+jQueryETS(this).attr("data-tag-id")).removeClass("tag-hover")}),jQueryETS(document).on("mouseenter click",".eiss-fancybox-slide.fancybox-slide--current .eiss-product-tag-item",function(e){e.preventDefault(),768<jQueryETS(window).width()&&(jQueryETS(this).addClass("tag-hover"),jQueryETS(this).closest(".eiss-fancybox-slide.fancybox-slide--current").find(".eiss_tag_product_"+jQueryETS(this).attr("data-tag-id")).addClass("tag-hover"))}),jQueryETS(document).on("mouseleave",".eiss-fancybox-slide.fancybox-slide--current .eiss-product-tag-item",function(e){e.preventDefault(),jQueryETS(this).removeClass("tag-hover"),jQueryETS(this).closest(".eiss-fancybox-slide.fancybox-slide--current").find(".eiss_tag_product_"+jQueryETS(this).attr("data-tag-id")).removeClass("tag-hover")}),jQueryETS(document).on("click",".eiss-product-tag-item",function(e){var t=jQueryETS(this).attr("data-product-handle");window.location.href="/products/"+t}),jQueryETS(document).on("mouseover",".eiss-item .eiss-product-tag-item.tagged",function(e){e.preventDefault(),jQueryETS(this).closest(".eiss-fancybox-item").addClass("hover-point-tagged")}),jQueryETS(document).on("mouseleave",".eiss-item .eiss-product-tag-item.tagged",function(e){e.preventDefault(),jQueryETS(this).closest(".eiss-fancybox-item").removeClass("hover-point-tagged")}),jQueryETS(document).on("click",".eiss-btn-tagged-product-add-card",function(e){e.preventDefault();var t=jQueryETS(this).attr("data-variant"),s=jQueryETS(this);jQueryETS.ajax({url:"/cart/add.js",type:"POST",dataType:"json",data:{quantity:1,id:t},beforeSend:function(){s.prop("disabled",!0)},success:function(e){void 0!==e.id?"alert"==jQueryETS(".eiss-fancybox-slide.fancybox-slide--current .fancybox-content").attr("data-viewcart")?eissToastSuccess('Added to cart, <a href="/cart">see detail</a>'):(window.location.href="/cart",eissToastSuccess("Added to cart!")):eissToastSuccess("Product added fail")},error:function(e){void 0!==e.readyState&&4==e.readyState&&e.responseJSON&&void 0!==e.responseJSON.description&&e.responseJSON.description&&eissToastSuccess(e.responseJSON.description)},complete:function(e){s.prop("disabled",!1)}})}),jQueryETS(document).on("click",".js-eiss-close-toast",function(e){e.preventDefault(),jQueryETS(this).closest(".eiss-toast").remove()}),jQueryETS(document).on("click",".eiss-btn-show-slide-photo",function(e){jQueryETS(this).prev("a.eiss-fancybox-item").trigger("click")}))}}),jQueryETS(document).ready(function(e){if("undefined"!=typeof ETS_ISS_LAST_TIME_CLEAR&&(""==ETS_ISS_LAST_TIME_CLEAR||ETS_ISS_LAST_TIME_CLEAR)){var t=new Date;ETS_ISS_LAST_TIME_CLEAR;0==ETS_ISS_LAST_TIME_CLEAR&&0,1<=Math.abs(t.getTime()-ETS_ISS_LAST_TIME_CLEAR)/36e5&&eissClearCache()}});