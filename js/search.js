//Access to json here: https://api.myjson.com/bins/1dzrh
/*
Superior Rune of the Defender
https://api.guildwars2.com/v2/items "name"
https://api.guildwars2.com/v2/recipes "output_item_id"
*/

var url = 'https://api.guildwars2.com/v2/'
//var data = 'https://cdn.rawgit.com/JimFung/gw2-recipieBook/master/js/dataset.json'

//setting up dataset
var dataURL = 'https://api.myjson.com/bins/1dzrh'
var dataset = null
$.get(dataURL, function(resp){
	dataset = resp;
});

$(document).ready(function(){

	// submit on enter
	$(".search-box").keypress(function(event){
		if(event.which == 13){
			event.preventDefault();
			search($(".search-box").val());
		}
	});

	// submit on click
	$(".search").click(function(){
		search($(".search-box").val());
	});

	// search logic
	function search(item){
		$.get(url+"recipes/"+dataset[item],function(resp){
			displayContent(resp);
		});
	}

	function displayContent(resp){
		// $(".content").append("<p>"+resp["id"]+"</p>");
		console.log(resp);
		for(decipline in resp["disciplines"]){
			$(".content").append("<p>"+resp["disciplines"][decipline]+"</p>");
		}
		// for(decipline in resp["disciplines"]){
		// 	$(".content").append("<p>"+decipline+"</p>");
		// }
	}
});
