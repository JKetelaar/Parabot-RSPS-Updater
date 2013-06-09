/* =========================================================
********************Comment Form Validation*****************
========================================================= */
jQuery(document).ready(function(){
    if(jQuery("#comments-form").length > 0){
        // Validate the contact form
        jQuery('#comments-form').validate({
	
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
		
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                url: {
                    required: "Please enter your url.",
                    url: "Please enter a valid url."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
		
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery("#submit-comment").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, $form) {
                        jQuery("#response").html(responseText).hide().slideDown("fast");
                        jQuery("#submit-comment").attr("value", "Comment");
                    }
                });
                return false;
            }
        });
    }
	
    if(jQuery("#contact-form").length > 0){
        // Validate the contact form
        jQuery('#contact-form').validate({
	
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
		
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("At least {0} characters required.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                url: {
                    required: "Please enter your url.",
                    url: "Please enter a valid url."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("At least {0} characters required.")
                }
            },
		
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery("#submit-contact").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, $form) {
                        jQuery("#response").html(responseText).hide().slideDown("fast");
                        jQuery("#submit-contact").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }
});

/* =========================================================
************************Sub menu****************************
==========================================================*/
(function($){ //create closure so we can safely use $ as alias for jQuery

	jQuery(document).ready(function(){

		// initialise plugin
		var example = jQuery('#main-menu').superfish({
			//add options here if required
		});
	});

})(jQuery);

/* =========================================================
************************Flex Slider*************************
==========================================================*/
jQuery(window).load(function(){
  jQuery('.flx-home-slider').flexslider({
	animation: "slide",
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
  
  jQuery('.carousel-slider').flexslider({
	animation: "slide",
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
  
  jQuery('.service-slider').flexslider({
	animation: "fade",
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
  
  jQuery('.home-page-3-slider').flexslider({
	animation: "slide",
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
});

/* =========================================================
*********************Testimonial Slider*********************
==========================================================*/
jQuery(window).load(function(){
  jQuery('.testimonial-slider').flexslider({
	animation: "fade",
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
  
  jQuery('.testimonial-slider-1').flexslider({
        animation: "slide",
        slideshow: true, 
        controlsContainer: ".flexslider-container"
    });
});

/* =========================================================
********************Isotope for magical layouts*************
========================================================= */
$.Isotope.prototype._getCenteredMasonryColumns = function() {
	this.width = this.element.width();
	
	var parentWidth = this.element.parent().width();
	
				  // i.e. options.masonry && options.masonry.columnWidth

	var colW = this.options.masonry && this.options.masonry.columnWidth ||
				  // or use the size of the first item
				  this.$filteredAtoms.outerWidth(true) ||
				  // if there's no items, use size of container
				  parentWidth;
	
	var cols = Math.floor( parentWidth / colW );
	cols = Math.max( cols, 1 );

	// i.e. this.masonry.cols = ....
	this.masonry.cols = cols;
	// i.e. this.masonry.columnWidth = ...
	this.masonry.columnWidth = colW;
  };
  
  $.Isotope.prototype._masonryReset = function() {
	// layout-specific props
	this.masonry = {};
	// FIXME shouldn't have to call this again
	this._getCenteredMasonryColumns();
	var i = this.masonry.cols;
	this.masonry.colYs = [];
	while (i--) {
	  this.masonry.colYs.push( 0 );
	}
  };

  $.Isotope.prototype._masonryResizeChanged = function() {
	var prevColCount = this.masonry.cols;
	// get updated colCount
	this._getCenteredMasonryColumns();
	return ( this.masonry.cols !== prevColCount );
  };
  
  $.Isotope.prototype._masonryGetContainerSize = function() {
	var unusedCols = 0,
		i = this.masonry.cols;
	// count unused columns
	while ( --i ) {
	  if ( this.masonry.colYs[i] !== 0 ) {
		break;
	  }
	  unusedCols++;
	}
	
	return {
		  height : Math.max.apply( Math, this.masonry.colYs ),
		  // fit container to columns that have been used;
		  width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
		};
  };

jQuery(function(){
  var $container = jQuery('#container');
  $container.imagesLoaded(function() {		
	$container.isotope({
	  itemSelector : '.element',
	  masonry : {
		columnWidth : 10
	  }
	});
});

});

/* =========================================================
*********************Blog Post Slider***********************
==========================================================*/
jQuery(document).ready(function(){
  jQuery('.blog-post-slider').flexslider({
	animation: "slide",
	smoothHeight: true,
	start: function(slider){
	  jQuery('body').removeClass('loading');
	}
  });
});

/* =========================================================
**************************Carousel**************************
==========================================================*/
jQuery(window).load(function() {
	
    if( jQuery("#flx-slides-1").length > 0){
		jQuery('#flx-slides-1').carouFredSel({
			responsive: true,
			prev: '#prev-1',
			next: '#next-1',
			width: '100%',
			scroll: 1,
			auto: false,
			items: {
				width: 200,
				height: 'auto',
				visible: {				
					min: 1,
					max: 5
				}
			}
		});
	}
	
	if( jQuery("#flx-slides-2").length > 0){
		jQuery('#flx-slides-2').carouFredSel({
			responsive: true,
			prev: '#prev-2',
			next: '#next-2',
			width: '100%',
			scroll: 1,
			auto: false,
			items: {
				width: 330,
				height: 'auto',
				visible: {				
					min: 1,
					max: 3
				}
			}
		});
	}
	
	if( jQuery("#flx-slides-3").length > 0){
		jQuery('#flx-slides-3').carouFredSel({
			responsive: true,
			prev: '#prev-3',
			next: '#next-3',
			width: '100%',
			scroll: 1,
			auto: false,			
			items: {
				width: 200,
				height: 'auto',
				visible: {				
					min: 1,
					max: 3
				}
			}
		});
	}

});

/* =========================================================
**************************prettyPhoto***********************
==========================================================*/
jQuery(window).load(function(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        overlay_gallery: false,
        "theme": 'light_rounded',
        keyboard_shortcuts: true,
        social_tools: false
    });
});

/* =========================================================
***********************Flickr Feed**************************
==========================================================*/
jQuery(document).ready(function(){ 
    jQuery('#flickr-feed-1').jflickrfeed({
        limit: 12,
        qstrings: {
            id: '94373259@N07'
        },
        itemTemplate:
        '<li class="flickr-badge-image">' +
    '<a rel="prettyPhoto[flx-flickr]" href="{{image}}" title="{{title}}">' +
    '<img src="{{image_s}}" alt="{{title}}" width="70px" heigth="70px" />' +
    '</a>' +
    '</li>'
    }, function(data) {
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({
            show_title: false,
            deeplinking:false
        }).mouseenter(function(){
            //jQuery(this).find('img').fadeTo(500, 0.6);
            }).mouseleave(function(){
            //jQuery(this).find('img').fadeTo(400, 1);
            });
    });
});

/* =========================================================
**************************Fix CSS***************************
==========================================================*/
jQuery(document).ready(function(){	
    
    jQuery("#bottom-sidebar > li:last-child").css({
        "border-right":"none"
    });	
	
})

/* =========================================================
****************************Tabs****************************
==========================================================*/
jQuery(document).ready(function() {    
    if( jQuery(".tab-content-1").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-1").hide(); //Hide all content
        jQuery("ul.tabs-1 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-1:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-1 li").click(function() {
            jQuery("ul.tabs-1 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-1").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
		
        });
    }
});

/* =========================================================
******************Progress bar jQuery plugin****************
==========================================================*/
jQuery(function() {
    jQuery(".progress-bar > span").each(function() {
        jQuery(this)
        .data("origWidth", jQuery(this).width())
        .width(0)
        .animate({
            width: jQuery(this).data("origWidth")
        }, 1200);
    });
});

/* =========================================================
************************Alert box***************************
========================================================= */
jQuery(document).ready(function($){
    
    jQuery(".alert-close-info").click(function(){
        jQuery(".alert-box-info").fadeOut("slow");
        return false;
    });
    
    jQuery(".alert-close-success").click(function(){
        jQuery(".alert-box-success").fadeOut("slow");
        return false;
    });
    
    jQuery(".alert-close-warning").click(function(){
        jQuery(".alert-box-warning").fadeOut("slow");
        return false;
    });
    
    jQuery(".alert-close-error").click(function(){
        jQuery(".alert-box-error").fadeOut("slow");
        return false;
    });
    
});

/* =========================================================
************************Accordion***************************
========================================================= */
jQuery(document).ready(function() {
    (function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
				
            });
            jQuery('.accordion-title').on('click', function(e) {
                if( jQuery(this).next().is(':hidden') ) {
                    jQuery(this).parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
                    jQuery(this).toggleClass('active').next().slideDown(300);
                }
                e.preventDefault();
            });
        }
    })();
});

/* =========================================================
******************Ajax Load Portfolio Detail****************
==========================================================*/
function felixplus_portfolio_detail_click(obj, id, effect){       
    var current_path = window.location.href;              
    current_path = current_path.substring(0, Math.max(current_path.lastIndexOf("/"), current_path.lastIndexOf("\\\\")));        
    
    if(!obj.hasClass('inprocess')){       
        jQuery.ajax({
            type:'POST',
            url: current_path+ '/pages/portfolio-detail-'+id+'.html',
            dataType:'html',
            async:false,
            data: {},
            beforeSend:function(XMLHttpRequest, settings){
                obj.addClass('inprocess');                
                jQuery('.pf-detail-box .row-fluid .span12').html('<center>Loading...</center>');
                if(false == effect)
                    jQuery('.pf-detail-box').fadeTo("slow", 0.5);
            },
            complete:function(XMLHttpRequest, textStatus){},
            success : function(data){      
                console.log(data);
                jQuery('.pf-detail-box .row-fluid .span12').html(data); 
                
                if(true == effect)
                    jQuery('.pf-detail-box').slideDown(500);
                else
                    jQuery('.pf-detail-box').fadeTo("slow", 1);
                
                obj.removeClass('inprocess');
				
                /***Portfolio Flex slider***/
                jQuery('.pf-list-flex').flexslider({
                    animation: "slide",
                    slideshow: true,
                    start: function(slider){
                        jQuery('body').removeClass('loading');
                    }
                });
				
                jQuery('audio,video').mediaelementplayer({
                    success: function(player, node) {
                        jQuery('#' + node.id + '-mode').html('mode: ' + player.pluginType);
                    }
                });
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {}				
        });                
    }
    return true;
}

function felixplus_portfolio_hide_click(obj){
    obj.remove();
    jQuery('.pf-detail-box').slideUp(500);
    return true;
}

/* =========================================================
**********************Audio % Video HTML5*******************
==========================================================*/
jQuery('audio,video').mediaelementplayer({
    success: function(player, node) {
        jQuery('#' + node.id + '-mode').html('mode: ' + player.pluginType);
    }
});

/* =========================================================
********************Mask hover style 2**********************
==========================================================*/
jQuery(function() {

	jQuery(' #da-thumbs > li ').each( function() { jQuery(this).hoverdir({
		hoverDelay : 75
	}); } );

});

/* =========================================================
**********************Dropdown list*************************
==========================================================*/
jQuery( function() {
			
	jQuery( '#cd-dropdown' ).dropdown( {
		gutter : 5,
		stack : false,
		delay : 100,
		slidingIn : 100
	} );

});

/* =========================================================
************************Toggle Boxes************************
==========================================================*/
jQuery(document).ready(function () {
     
    jQuery('#toggle-view li').click(function (event) {
 		
        var text = jQuery(this).children('div.panel');
 
        if (text.is(':hidden')) {
			jQuery(this).addClass('active');
            text.slideDown('300');
            jQuery(this).children('span').html('-');			     
        } else {
			jQuery(this).removeClass('active');
            text.slideUp('300');
            jQuery(this).children('span').html('+');			   
        }
         
    });
 
});

/* =========================================================
*********************************Twitter********************
==========================================================*/
jQuery(document).ready(function() {
    var twitter_update_list = jQuery('.twitter_outer');
    if(twitter_update_list.length > 0){
        jQuery.each(twitter_update_list, function(){            
            jQuery(this).find('.twitter_inner').first().tweet({
                join_text: "auto",
                username: jQuery(this).find('.tweet_id').first().val(),
                avatar_size: 18,
                count: jQuery(this).find('.tweet_count').first().val(),
                auto_join_text_default: "",
                auto_join_text_ed: "",
                auto_join_text_ing: "",
                auto_join_text_reply: "",
                auto_join_text_url: "",
                loading_text: "<center>loading tweets...</center><br/>",
                template: "{join} {text} {time}"
            });            
        });
    }
});

jQuery(window).load(function() {
    jQuery("#flx-footer .widget .tweet_list li:last-child").css({
        "margin-bottom":0, 
        "padding-bottom":0, 
        "border-bottom": "none"
    });
});

/* =========================================================
************************Mobile Menu*************************
==========================================================*/
jQuery(function() {
	jQuery( '#dl-menu' ).dlmenu({
		animationClasses : { in : 'dl-animate-in-5', out : 'dl-animate-out-5' }
	});
});

/* =========================================================
***********************Go to top****************************
==========================================================*/
jQuery(document).ready(function(){

	// hide #back-top first
	jQuery("#back-top").hide();
	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 200) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});





