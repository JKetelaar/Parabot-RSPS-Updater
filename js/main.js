jQuery(document).ready(function() {
	
  // get and assign the ourHolder element to the
	// $holder varible for use later
  var $holder = jQuery('ul.ourHolder');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
	// item is clicked
	jQuery('.cd-dropdown ul li span').click(function(e) {
		
		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = jQuery(this).attr('class');
		
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li.item');
		} 
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		
		// call quicksand and assign transition parameters
		
		$holder.quicksand($filteredData,{
				duration: 800,
				easing: 'easeInOutQuad'
			},
			function(){
			 jQuery("a[rel^='prettyPhoto']").prettyPhoto({
					overlay_gallery: false,
					"theme": 'light_rounded',
					keyboard_shortcuts: true,
					social_tools: false
				});

			});
		
		jQuery('.cd-dropdown').find('span').first().onClick();
		
		return false;
	});
});