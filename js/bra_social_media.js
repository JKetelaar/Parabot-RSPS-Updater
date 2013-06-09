/***************************************************
	      SOCIALIZE ICON IMAGE HOVER
***************************************************/
jQuery(function() {
jQuery('.social-bookmarks img').animate({ opacity: 0.5}, 0) ;
jQuery('.social-bookmarks img').each(function() {
jQuery(this).hover(
function() {
jQuery(this).stop().animate({ opacity: 1.0 }, 200);
},
function() {
jQuery(this).stop().animate({ opacity: 0.5 }, 200);
})
});
});