window.fileReader = (function () {

	var _maxSize = config_global.file.maxSize,
		_type = config_global.file.type;

	var readDataUrl = function (file, fn, clas) {
		var reader = new FileReader();

		reader.onload = function (e) {
			if (fn)	fn(clas, e.target.result);
		};

	    reader.readAsDataURL(file);
	};

	var validateSize = function (size) {
		console.log("validate size");
		if (size >= _maxSize) return false;
		else return true;
	}

	var validateType = function (type) {
		console.log("validate type");
		for (var i = 0; i < _type.length; i++) {
			if (_type[i] === type) {
				return true;
			}
		}

		return false;
	}

	var setFile = function (file) {
		var list = config_global.component_list;
		for (var i = 0, len = list.length; i < len; i++) {
			if (list[i].name === "upload") {
				$('.' + list[i]["class"] + '')[0] = file;
			}
		}
	}

	return {
		readDataUrl: readDataUrl,
		validateType: validateType,
		validateSize: validateSize
	};
})();