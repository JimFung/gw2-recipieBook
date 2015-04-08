var url = 'https://api.guildwars2.com/v2/'

$(document).ready(function(){

	// submit on enter
	$(".search-box").keypress(function(event){
		if(event.which == 13){
			event.preventDefault();
			search($(".search-box").val());
		}
	});

	// submit on clic
	$(".search").click(function(){
		search($(".search-box").val());
	});

	// search logic
	function search(recipe){
		
	}
});