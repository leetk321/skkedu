var idx = 2; // 생성될 객체 idx
var idx_p = 1;
var page = 2;

jQuery(document).ready(function () {
	jQuery("#mo-btn").click(function() {

	var newDiv=document.createElement('div'); 

	newDiv.innerHTML= '<div class="mo"><img src="css/more.gif"></div>';
	newDiv.setAttribute('id','more'+idx); 

	setTimeout(function(){
		
		morediv = '#more'+idx;
		morediv_p = '#more'+idx_p;
 		
		var reload_href_full = ''+'/index.php?mid={$mid}&category={$category}&search_target={$search_target}&search_keyword={$search_keyword}&page='+page+' #list';
		
		jQuery(newDiv).insertBefore('#list_more' );
		jQuery(morediv).load(reload_href_full).fadeIn(1000).delay(5000);

 		page++;
  		idx++;
 		idx_p++;

		}, 1000);
	});
});