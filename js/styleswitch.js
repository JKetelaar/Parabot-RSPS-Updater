function felixplus_theme_option_reset_CLICK(){
    jQuery('input:radio[name="flx-select-footer-choice"][value="f_dark"]').prop('checked', true);  
    
    felixplus_footer_CHANGE('f_dark');    
    
    return false;
}

jQuery(document).ready(function($) {     
    felixplus_style_switch_INIT();
    jQuery('.choose-color a.oran').addClass('active');
	jQuery('input:radio[name="flx-select-footer-choice"][value="f_dark"]').prop('checked', true);
	jQuery('input:radio[name="flx-select-style-choice"][value="light"]').prop('checked', true);
});

function felixplus_style_switch_INIT(){   
    
    // Color Change
    jQuery("a.oran" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/orange.css");
        return false;
    });
		
    jQuery("a.cyan" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/cyan.css");
        return false;
    });
		
    jQuery("a.pink" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/pink.css");
        return false;
    });
		
    jQuery("a.green" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/green.css");
        return false;
    });
		
    jQuery("a.red" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/red.css");
        return false;
    });
	
	jQuery("a.gray" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/gray.css");
        return false;
    });
	
	jQuery("a.purple" ).click(function(){
        jQuery("#colors" ).attr("href", "css/skin/purple.css");
        return false;
    });
		
    jQuery('.choose-color a').click(function(e){
        e.preventDefault();
        jQuery(this).parent().parent().find('a').removeClass('active');
        jQuery(this).addClass('active');
    });
	
	jQuery("#flx-select-dark-style" ).click(function(){
        jQuery("#templates" ).attr("href", "css/skin/dark.css");
		jQuery('.flx-select-footer').hide();
    });
	
	jQuery("#flx-select-light-style" ).click(function(){
        jQuery("#templates" ).attr("href", "css/skin/orange.css");
		jQuery('.flx-select-footer').show();
    });
		
		
    
jQuery(window).load(function($) {	
    // Switcher Layout
    jQuery('#theme-option').animate({
        left: '-275px'
    });
		
    jQuery('.open-close-button').click(function(e){
        e.preventDefault();
        var div = jQuery('#theme-option');
        if (div.css('left') === '-275px') {
            jQuery('#theme-option').animate({
                left: '0px'
            }); 
        } else {
            jQuery('#theme-option').animate({
                left: '-275px'
            });
        }
    });
});
		
		
    // Reset
    jQuery('a.reset').click(function(e){
        jQuery('.color.oran').trigger('click');
		jQuery('#flx-select-light-style').trigger('click');
        jQuery('.theme-opt-wrapper select[name=layout]').val('f_dark');	
        footer_CHANGE();
    });				    
}

function felixplus_footer_CHANGE(val){
    if('f_light' == val){
        jQuery('body').removeClass('dark-footer');
    }else{
        jQuery('body').addClass('dark-footer');		
    }
}