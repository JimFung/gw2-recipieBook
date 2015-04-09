var url = 'https://api.guildwars2.com/v2/'

/*
https://api.guildwars2.com/v2/items "name"
https://api.guildwars2.com/v2/recipes "output_item_id"
*/
var master_list = [];
$(document).ready(function(){

	/*Set-up data*/
	$.get(url+"recipes", function(data){
		console.log(data.length);
		for(var i = 0, len = data.length; i < len; i++){
			$.get(url+"recipes/"+data[i], function(reci){
				$.get(url+"items/"+reci["output_item_id"],function(item){
					// console.log(item["name"] + ": " + reci["output_item_id"]);
					// $(".content").append("<p>\"" + item["name"] + "\": " + reci["output_item_id"] + ",</p>");
					master_list[item["name"]] = reci["output_item_id"];					
				});
			});
		}
	});

	console.log(master_list);

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

