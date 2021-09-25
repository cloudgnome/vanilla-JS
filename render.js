var cond_regex = /{\?if (?<cond>[a-z ]+)\?}(?<exp1>[\S\s]*)(?:{\?else\?})(?<exp2>[\S\s]*)(?:{\?endif\?})/g;
function render(node,json){
	var html = node.innerHTML;

	var items = [...html.matchAll(/{~(?<name>\w+)~}/g)];

	var conds = [...html.matchAll(cond_regex)];

	for(var cond of conds){
		if(cond && cond.groups){
			var text = '';
			if(json && Object.keys(json).includes(cond.groups.cond))
				text = cond.groups.exp1;
			else{
				text = cond.groups.exp2 ? cond.groups.exp2 : '';
			}


			html = html.replace(cond[0],text)
		}
	}

	for(var item of items){
		var name = item.groups.name;
		var text = '';
		if(json && json[name])
			text = json[name];

		html = html.replace(new RegExp(`{~${name}~}`),text);
	}

	if(json || items.length || conds.length)
		return html;
	else{
		return node.content.cloneNode(true);
	}
}
