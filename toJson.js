function toJson(element){
	let blocks = [];

	for(let elem of element.children){
		if(!mapData[elem.nodeName]){
			log(elem.nodeName);
			continue
		}
		let type = mapData[elem.nodeName];

		if(!type)
			continue;

		let node = {
			type: type,
			data:{
				text: elem.html()
			}
		};

		if(type == 'header')
			node.data.level = elem.nodeName.match('[0-9]+')[0];

		blocks.push(node);
	}

	return blocks;
};
