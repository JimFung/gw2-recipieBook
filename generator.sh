#!/bin/bash
#generates a dataset that maps each recipe id with its corressonding item name

#base api url
url='https://api.guildwars2.com/v2/'
filename=dataset.json

#generating all the rids
rid=$(curl $url'recipes' |jq '[.[]]')
rid=$(echo $rid | tr [ " " | tr ] " " | tr -d ' ')
IFS=',' read -a rid <<<"$rid"

#loop through each rid and get the appropriate item name
echo "{" >> $filename
for element in "${rid[@]}"
do
	iid=`curl $url'recipes/'$element | jq '.output_item_id'`
	item_name=`curl $url'items/'$iid | jq '.name'`
	echo $item_name":"$element"," >> $filename
done
echo "}" >> $filename
