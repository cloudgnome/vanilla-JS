function serialize(){
	var i, j, q = [];
	var data = new FormData();
	for (i = this.elements.length - 1; i >= 0; i = i - 1) {
		if (this.elements[i].name === "") {
			continue;
		}
		switch (this.elements[i].nodeName) {
		case 'INPUT':
			switch (this.elements[i].type) {
			case 'text':
			case 'hidden':
			case 'password':
			case 'button':
			case 'reset':
			case 'submit':
			case 'number':
			case 'date':
				if(this.elements[i].value)
					data.append(this.elements[i].name, this.elements[i].value);
				break;
			case 'checkbox':
			case 'radio':
				if (this.elements[i].checked) {
					data.append(this.elements[i].name, this.elements[i].value);
				}
				break;
			case 'file':
				file = this.elements[i].files[0];
				if(file){
					data.append(file.name, file);
				}
				break;
			}
			break; 
		case 'TEXTAREA':
			if(this.elements[i].value)
				data.append(this.elements[i].name, this.elements[i].value);
			break;
		case 'SELECT':
			switch (this.elements[i].type) {
			case 'select-one':
				if(this.elements[i].value)
					data.append(this.elements[i].name, this.elements[i].value);
				break;
			case 'select-multiple':
				for (j = this.elements[i].options.length - 1; j >= 0; j = j - 1) {
					if (this.elements[i].options[j].selected) {
						data.append(this.elements[i].name, this.elements[i].options[j].value);
					}
				}
				break;
			}
			break;
		case 'BUTTON':
			switch (this.elements[i].type) {
			case 'reset':
			case 'submit':
			case 'button':
				data.append(this.elements[i].name, this.elements[i].value);
				break;
			}
			break;
		}
	}
	return data;
}
